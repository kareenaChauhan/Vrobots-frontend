import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useAuthContext } from "../../context/AuthContext"; // Import your AuthContext
import { CONFIRM_ACCOUNT } from "../../graphql/mutations/account";



interface ConfirmAccountResponse {
  confirmAccount: {
    accountErrors: { code: string; message: string }[];
    accessToken?: string; // Optional, if returned by backend
    refreshToken?: string; // Optional, if returned by backend
  };
}

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState<string>("");
  const { login } = useAuthContext(); // Use AuthContext for login
 const navigate = useNavigate();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [confirmAccount] = useMutation<ConfirmAccountResponse>(CONFIRM_ACCOUNT);

  useEffect(() => {
    const verify = async () => {
      if (!email || !token) {
        setStatus("error");
        setMessage("Missing email or token in the URL.");
        return;
      }

      try {
        const { data } = await confirmAccount({
          variables: { email, token },
          context: {
            headers: {
              "Content-Type": "application/json",
            },
          },
        });

        const errors = data?.confirmAccount.accountErrors || [];

        if (errors.length === 0) {
          setStatus("success");
          setMessage("Email confirmed successfully!");
       
          // Log in the user if tokens are returned
          if (data?.confirmAccount.accessToken) {
            login(data.confirmAccount.accessToken, data.confirmAccount.refreshToken);
          }
          navigate("/login"); 
        } else {
          setStatus("error");
          const error = errors[0];
          if (error.code === "EXPIRED_TOKEN") {
            setMessage("The verification link has expired. Please request a new one.");
          } else {
            setMessage(error.message || "Failed to verify email.");
          }
        }
      } catch (error) {
        setStatus("error");
        setMessage("An error occurred while verifying the email.");
        console.error("Verification error:", error);
      }
    };

    verify();
  }, [email, token, confirmAccount, login]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Confirm Email</h1>
      {status === "loading" && <p>Verifying your email...</p>}
      {status === "success" && <p style={{ color: "green" }}>{message}</p>}
      {status === "error" && <p style={{ color: "red" }}>{message}</p>}
    </div>
  );
};

export default ConfirmEmail;
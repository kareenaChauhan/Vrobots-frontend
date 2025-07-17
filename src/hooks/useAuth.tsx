import { useMutation } from "@apollo/client";
import { TOKEN_CREATE } from "../graphql/mutations/auth";
import { ACCOUNT_REGISTER } from "../graphql/mutations/account";
import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { login: saveToken } = useAuthContext();
  const [loginMutation] = useMutation(TOKEN_CREATE);
  const [registerMutation] = useMutation(ACCOUNT_REGISTER);

  const login = async (email: string, password: string) => {
    const { data } = await loginMutation({ variables: { email, password } });
    const token = data?.tokenCreate?.token;
    if (token) saveToken(token);
    return data;
  };

  const register = async (email: string, password: string) => {
    const { data } = await registerMutation({
      variables: { input: { email, password } },
    });
    return data;
  };

  return { login, register };
};

import { useQuery } from "@apollo/client";
import { GET_CART } from "../graphql/queries/getCart";

export const useCart = () => {
  const token = localStorage.getItem("checkoutToken");
  
  console.log("🔑 Retrieved token from localStorage:", token);

  const { data, loading, error } = useQuery(GET_CART, {
    variables: { token },
    skip: !token,
  });

  console.log("📊 Cart query result:", { data, loading, error });

  return {
    cartData: data?.checkout,
    loading,
    error,
  };
};

// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// const httpLink = createHttpLink({
//   uri: "http://13.200.195.70:8000/graphql/",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("accessToken");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `JWT ${token}` : "",
//     },
//   };
// });

// export const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });



import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_BACKEND_URL, // ✅ No hardcoded IP
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

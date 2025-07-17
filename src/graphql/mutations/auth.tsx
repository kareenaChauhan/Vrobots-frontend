import { gql } from "@apollo/client";

export const TOKEN_CREATE = gql`
  mutation TokenCreate($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      refreshToken
      user {
        id
        email
      }
      errors {
        field
        message
      }
    }
  }
`;

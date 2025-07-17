import { gql } from "@apollo/client";

export const ACCOUNT_REGISTER = gql`
  mutation AccountRegister($input: AccountRegisterInput!) {
    accountRegister(input: $input) {
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


export const CONFIRM_ACCOUNT = gql`
  mutation ConfirmAccount($email: String!, $token: String!) {
    confirmAccount(email: $email, token: $token) {
      accountErrors {
        code
        message
      }
      
    }
  }
`;

// export const CONFIRM_ACCOUNT = gql`
//   mutation ConfirmAccount($email: String!, $token: String!) {
//     confirmAccount(email: $email, token: $token) {
//       accountErrors {
//         code
//         message
//       }
//       accessToken
//       refreshToken
//     }
//   }
// `;

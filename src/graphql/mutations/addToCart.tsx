import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
mutation CreateCheckout($email: String!, $lines: [CheckoutLineInput!]!, $channel: String!) {
    checkoutCreate(input: { email: $email, lines: $lines, channel: $channel }) {
      checkout {
        id
        token
        lines {
          id
          quantity
          variant {
            id
            name
            product {
              name
            }
          }
        }
      }
      errors {
        field
        message
      }
    }
  }
`;

export const ADD_TO_EXISTING_CART = gql`
mutation AddToExistingCart($token: UUID!, $lines: [CheckoutLineInput!]!) {
    checkoutLinesAdd(token: $token, lines: $lines) {
      checkout {
        id
        token
        lines {
          id
          quantity
          variant {
            id
            name
            product {
              id
              name
            }
          }
        }
      }
      errors {
        field
        message
      }
    }
  }
`;
  
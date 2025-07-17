import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCheckout($token: UUID!) {
    checkout(token: $token) {
      id
      token
      email
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
      totalPrice {
        gross {
          amount
          currency
        }
      }
    }
  }
`;

// graphql/queries/products.ts
import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products(first: 100, channel: "default-channel") {
      edges {
        node {
          id
          name
          slug
          description
          images {
            url(size: 500, format: ORIGINAL)
            alt
          }
          attributes {
            attribute {
              id
              name
            }
            values {
              id
              name
              plainText
              richText
              value
              slug
            }
          }
          category {
            name
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
          }
          rating 
          variants {
            id
            name
            sku
          }
        }
      }
    }
  }
`;





export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!, $channel: String = "default-channel") {
    product(slug: $slug, channel: $channel) {
      id
      name
      slug
      description
      images {
        url(size: 500, format: ORIGINAL)
        alt
      }
      attributes {
        attribute {
          id
          name
        }
        values {
          id
          name
          plainText
          value
        }
      }
      category {
        name
      }
      pricing {
        priceRange {
          start {
            gross {
              amount
              currency
            }
          }
        }
      }
      rating 
      variants {
            id
            name
            sku
      }
    }
  }
`;


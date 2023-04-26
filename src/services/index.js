import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            tags
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const recentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(first: 6, orderBy: publishedAt_ASC) {
        id
        title
        tags
        slug
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}

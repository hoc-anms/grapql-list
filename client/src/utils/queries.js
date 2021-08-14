import {
    gql,
  } from "@apollo/client";

const getBooksQuery = gql`
  {
      books {
          name
          genre
          id
          author {
              name
              age
          }
      }
  }
`;

export default getBooksQuery;
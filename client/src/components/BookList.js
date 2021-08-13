import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
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
`

function BookList() {
    const data = useQuery(getBooksQuery);
    
    return (
        <div>
            <ul id="book-list">
                {
                    data.loading ? (
                        <div>loading...</div>
                    ) : (data.data.books.map( book => {
                        return (
                            <li key={book.id}>{book.name}</li>
                        )
                    } ) )
                }
            </ul>
        </div>
    );
}

export default BookList;

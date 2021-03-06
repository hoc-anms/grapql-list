import BookList from './components/BookList'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

// Todo: Apollo setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;

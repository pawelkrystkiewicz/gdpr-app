// require("dotenv").config({ path: "../../.env" });
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { setContext } from 'apollo-link-context';
import fetch from "isomorphic-unfetch";
import Cookies from "js-cookie";
let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}


const httpLink = createHttpLink({
  uri: "http://localhost:4000", // Server URL (must be absolute)
  credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
});

// const authLink = setContext((_, {
//   headers
// }) => {
//   // get the authentication token from Cookies if it exists
//   const token = Cookies.get().sessionToken;
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

const authLink = setContext((_, {
  headers
}) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = Cookies.get().sessionToken;
  // return the headers to the context so httpLink can read them
  console.log('IT UPDATES HEADERS ON EACH REQUEST ALREADY');
  return token ? {
    headers: {
      ...headers,
      authorization: `${token}`,
    }
  } : {
    headers
  };
});

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink), 
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

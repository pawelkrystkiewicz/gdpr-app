// require("dotenv").config({ path: "../../.env" });
import React from "react";
import { ApolloClient, InMemoryCache} from "apollo-boost";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import fetch from "isomorphic-unfetch";


const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const authLink = setContext((_, { headers }) => {
  const token = '123'
  // localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  clientState: {
    defaults: {
      authStatus: {
        _typeName: "AuthStatus",
        isAuth: false
      }
    },
    resolvers: {
      Query: {},
      Mutation: {
      login: (_, {
          isAuth
        }, {
          cache
        }) => {
          cache.writeData({
            data: {
              authStatus: {
                _typeName: "AuthStatus",
                isAuth
              }
            }
          });
          console.log(`Dataprovider: ${authStatus.isAuth}`);
          return null;
        }
      }
    }
  },
  connectToDevTools: process.browser,
  ssrMode: !process.browser,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

if (!process.browser) {
  global.fetch = fetch;
}

export default ({ children }) => ({
  render() {
    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    );
  }
});

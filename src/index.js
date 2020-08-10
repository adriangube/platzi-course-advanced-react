import React from "react";
import ReactDOM from 'react-dom';
import { App } from "./App";
import {ApolloClient, HttpLink} from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {API_BASE_URL} from "./constants";
import {InMemoryCache} from "apollo-cache-inmemory";


const cache = new InMemoryCache()
const link = new HttpLink({
  uri: `${API_BASE_URL}/graphql`
})

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
   <App/>
  </ApolloProvider>,
  document.getElementById('app')
);

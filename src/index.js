import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://52.194.211.12:3000/graphql',
  request: operation => {
    operation.setContext({
    });
  }
});

const query = gql`
  {
    users {
      edges {
        node {
          id
          name
          age
          score
        }
      }
    }
  }
`

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

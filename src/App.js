import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';


const query = gql`
  {
    users (first: 10) {
      nodes {
        id
        name
        age 
        score
      }
    }
  }
`;

const App = () => (
  <Query query={query}>
    {({ loading, data }) => {
      if (loading) return <p>Loading...</p>;
      const users = data.users.nodes;
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p>名前:{user.name}</p>
              <div>年齢:{user.age}</div>
              <div>点数:{user.score}</div>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default App;

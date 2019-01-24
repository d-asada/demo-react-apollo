import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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

const REMOVE_USER = gql`
  mutation($id: ID!) {
    deleteUser(id: $id) {
      user {
        id
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
              <div>ID: {user.id}</div>
              <div>名前:{user.name}</div>
              <div>年齢:{user.age}</div>
              <div>点数:{user.score}</div>
              <Mutation
                mutation={REMOVE_USER}
                variables={{ id: user.id }}
              >
                {(deleteUser, { data, loading, error }) => (
                  <button onClick={deleteUser} >削除</button>
                )}
              </Mutation>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default App;

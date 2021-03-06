'use strict';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();


const schema = require('./schema');

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

const root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
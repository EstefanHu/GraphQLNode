'use strict';
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
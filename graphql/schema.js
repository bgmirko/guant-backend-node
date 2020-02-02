const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        userName: String!
    }

    type RootQuery {
        getUser(email: String!, password: String!): User
    }

    schema {
        query: RootQuery
    }
`);
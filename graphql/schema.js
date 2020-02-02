const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String!
        userName: String!
    }

    type Performer {
        _id: ID!
        name: String!
        age: String!
        category: String!
    }

    type RootQuery {
        getUser(email: String!, password: String!): User
    }

    type RootMutation {
        createUser(email: String!, password: String!, name: String!, userName: String!): User!
        createPerformer(name: String!, age: String!, category: String!): Performer!
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);
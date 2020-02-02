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

    type PerformersData {
        performers: [Performer]
    }

    type RootQuery {
        getUser(email: String!, password: String!): User
        getPerformers: PerformersData
    }

    type RootMutation {
        createUser(email: String!, password: String!, name: String!, userName: String!): User!
        createPerformer(name: String!, age: String!, category: String!): Performer
        deletePerformer(_id: String): Performer
    }

    schema {
        query: RootQuery,
        mutation: RootMutation
    }
`);
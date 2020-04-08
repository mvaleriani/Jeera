const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        loggedIn: { type: GraphQLBoolean },
        token: { type: GraphQLString }
    })
})

module.exports = UserType;
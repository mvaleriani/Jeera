const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const UserType = require('./user_type')
const User = require('../models/User')

const RootType = new GraphQLObjectType({
    name: 'RootType',
    fields: () => ({
        user: {
            type: UserType,
            // args: { id: { type: GraphQLID } },
            resolve: () => {
                return User.find({});
            }
        }
    })
})

module.exports = RootType;
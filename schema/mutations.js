const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require('mongoose');

const UserType = require('./user_type');
const User = mongoose.model('user')

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        newUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parentValue, { name }) => {
                return new User({ name }).save(); 
            }
        }
    }
})

module.exports = Mutations;
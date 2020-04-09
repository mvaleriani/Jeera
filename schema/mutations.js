const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require('mongoose');
const AuthService = require('../services/auth')

const UserType = require('./user_type');
const User = mongoose.model('user')

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        registerUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parentValue, data) => {
                return AuthService.registerUser(data); 
            }
        },
        loginUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parentValue, data) => {
                return "merp"
            }
        }
    }
})

module.exports = Mutations;
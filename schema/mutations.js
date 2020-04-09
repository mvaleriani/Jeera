const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require('mongoose');
const AuthService = require('../services/auth')

const UserType = require('./user_type');
// const User = mongoose.model('user')

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
            resolve: (_, args) => {
                return AuthService.registerUser(args); 
            }
        },
        loginUser: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (_, args) => {
                return AuthService.loginUser(args)
            }
        },
        logoutUser: {
            type: UserType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (_, args) => {
                return AuthService.logoutUser(args);
            }
        }
    }
})

module.exports = Mutations;
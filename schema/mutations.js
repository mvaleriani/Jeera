const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: {

    }
})

module.exports = Mutations;
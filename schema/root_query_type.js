const graphql = require('graphql')
const { GraphQLObjectType } = graphql;

const RootType = new GraphQLObjectType({
    name: 'RootType',
    fields: () => ({

    })
})

module.exports = RootType;
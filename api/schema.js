const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type'
})

const schema = new GraphQLSchema({
  query: QueryType
})

exports.schema = schema

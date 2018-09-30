const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'House',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
})

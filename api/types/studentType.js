const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = require('graphql')
const { getHouseName } = require('../resolvers/houses')

module.exports = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    house: {
      type: GraphQLString,
      resolve(_) {
        return getHouseName(_.house)
      }
    }
  })
})

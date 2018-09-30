const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} = require('graphql')
const HouseType = require('./HouseType')
const { getHouseById } = require('../resolvers/houses')

module.exports = new GraphQLObjectType({
  name: 'Student',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    house: {
      type: HouseType,
      resolve(_) {
        return getHouseById(_.house)
      }
    }
  })
})

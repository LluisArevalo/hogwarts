const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require('graphql')
const StudentType = require('./StudentType')
const { getStudentsByHouse } = require('../resolvers/students')

module.exports = new GraphQLObjectType({
  name: 'House',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    points: { type: GraphQLInt },
    students: {
      type: new GraphQLList(StudentType),
      resolve(_) {
        return getStudentsByHouse(_._id)
      }
    }
  })
})

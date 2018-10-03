const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString
} = require('graphql')
const StudentType = require('./StudentType')
const { getStudentsByHouse } = require('../resolvers/students')

module.exports = new GraphQLObjectType({
  name: 'House',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    students: {
      type: new GraphQLList(StudentType),
      resolve(_) {
        return getStudentsByHouse(_._id)
      }
    }
  })
})

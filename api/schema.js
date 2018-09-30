const {
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType
} = require('graphql');

const HouseType = require('./types/HouseType')
const StudentType = require('./types/StudentType')
const { getHouses } = require('./resolvers/houses')
const { getStudents } = require('./resolvers/students')

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    houses: {
      type: new GraphQLList(HouseType),
      resolve() {
        return getHouses()
      }
    },
    students: {
      type: new GraphQLList(StudentType),
      resolve() {
        return getStudents()
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: QueryType
})

exports.schema = schema

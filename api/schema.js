const {
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat
} = require('graphql');

const HouseType = require('./types/HouseType')
const StudentType = require('./types/StudentType')
const { getHouses, addHousePoints } = require('./resolvers/houses')
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

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type',
  fields: {
    addPointsToHouse: {
      type: HouseType,
      args: {
        points: {
          type: GraphQLFloat,
          description: 'Number of points to add/substract to the house'
        },
        house: {
          type: GraphQLString,
          description: 'House name'
        }
      },
      resolve(_, args) {
        return addHousePoints(args.house, args.points)
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})

exports.schema = schema

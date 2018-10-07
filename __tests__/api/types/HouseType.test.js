const HouseType = require('../../../api/types/HouseType')
const { GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')
const StudentType = require('../../../api/types/StudentType')

describe('GraphQL House Type', () => {
  it('Should have the correct fields', () => {
    const fields = HouseType._fields()

    expect(fields.id).not.toBeUndefined()
    expect(fields.id.type).toBe(GraphQLID)
    expect(fields.name).not.toBeUndefined()
    expect(fields.name.type).toBe(GraphQLString)
    expect(fields.points).not.toBeUndefined()
    expect(fields.points.type).toBe(GraphQLInt)
    expect(fields.students).not.toBeUndefined()
    expect(fields.students.type).toEqual(new GraphQLList(StudentType))
  })
})

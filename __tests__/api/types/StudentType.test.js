const StudentType = require('../../../api/types/StudentType')
const { GraphQLID, GraphQLString } = require('graphql')

describe('GraphQL Student Type', () => {
  it('Should have the correct fields', () => {
    const fields = StudentType._fields()

    expect(fields.id).not.toBeUndefined()
    expect(fields.id.type).toBe(GraphQLID)
    expect(fields.name).not.toBeUndefined()
    expect(fields.name.type).toBe(GraphQLString)
    expect(fields.house).not.toBeUndefined()
    expect(fields.house.type).toBe(GraphQLString)
  })
})

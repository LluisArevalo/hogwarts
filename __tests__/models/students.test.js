const StudentModel = require('../../models/students')

describe('Student Model Fields', () => {
  it('Should have a required & unique name', () => {
    expect(StudentModel.schema.obj.name).not.toBeUndefined()
    expect(typeof StudentModel.schema.obj.name.type()).toBe('string')
    expect(StudentModel.schema.obj.name.index.unique).toBe(true)
    expect(StudentModel.schema.obj.name.required).toBe(true)
  })

  it('Should have a reference to house', () => {
    expect(StudentModel.schema.obj.house).not.toBeUndefined()
    expect(typeof StudentModel.schema.obj.house.ref).toBe('string')
  })
})

const HouseModel = require('../../models/houses')

describe('House Model Fields', () => {
  it('Should have a required & unique name', () => {
    expect(HouseModel.schema.obj.name).not.toBeUndefined()
    expect(typeof HouseModel.schema.obj.name.type()).toBe('string')
    expect(HouseModel.schema.obj.name.index.unique).toBe(true)
    expect(HouseModel.schema.obj.name.required).toBe(true)
  })

  it('Should have a points number with a default value of 0', () => {
    expect(HouseModel.schema.obj.points).not.toBeUndefined()
    expect(typeof HouseModel.schema.obj.points.type()).toBe('number')
    expect(HouseModel.schema.obj.points.default).toBe(0)
  })
})

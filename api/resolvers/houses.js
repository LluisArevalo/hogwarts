const HouseModel = require('../../models/houses')

async function getHouses() {
  return new Promise(resolve => {
    HouseModel.find((error, houses) => {
      if (error) {
        throw new Error(`Error fetching houses. Details: ${error}`)
      }

      return resolve(houses)
    })
  })
}

async function getHouseById(id) {
  return new Promise(resolve => {
    HouseModel.findById(id, (error, house) => {
      if (error) {
        throw new Error(`Error fetching house with id ${id}`)
      }

      return resolve(house)
    })
  })
}

module.exports = {
  getHouses,
  getHouseById
}

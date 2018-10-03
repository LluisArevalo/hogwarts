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

async function getHouseName(houseId) {
  return new Promise(resolve => {
    HouseModel.findById(houseId, (error, house) => {
      if (error) {
        throw new Error(`Error fethcing house with id ${houseId}. Details: ${error}`)
      }

      return resolve(house.name)
    })
  })
}

module.exports = {
  getHouseName,
  getHouses
}

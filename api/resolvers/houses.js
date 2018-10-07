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

async function addHousePoints(house, points) {
  return new Promise((resolve, reject) => {
    HouseModel.findOne({ name: house }, (error, foundHouse) => {
      if (error) {
        return reject(new Error(`Error fetching house with name ${house}. Details: ${error}`))
      }

      foundHouse.points += points
      foundHouse.save((error, updatedHouse) => {
        if(error) {
          return reject(new Error(`Error updating house ${house}. Details: ${error}`))
        }

        return resolve(updatedHouse)
      })
    })
  })
}

module.exports = {
  getHouseName,
  getHouses,
  addHousePoints
}

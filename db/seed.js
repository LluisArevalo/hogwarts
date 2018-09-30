require('./index.js')
const HouseModel = require('../models/Houses')
const StudentModel = require('../models/Students')
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
const students = {
  Gryffindor: ['Harry Potter', 'Ron Weasley', 'Hermione Granger'],
  Slytherin: ['Draco Malfoy', 'Vincent Crabbe', 'Gregory Goyle', 'Pansy Parkinson'],
  Hufflepuff: ['Cedric Diggory', 'Hannah Abbot'],
  Ravenclaw: ['Luna Lovegood', 'Padma Patil', 'Cho Chang']
}

HouseModel.deleteMany({}, () => {
  houses.forEach(house => {
    const houseInfo = { name: house }

    HouseModel.create(houseInfo, (error, createdHouse) => {
      if (error) {
        console.error(`Error creating ${house}`)
      } else {
        console.info(`House ${createdHouse} created`)
        students[createdHouse.name].forEach(student => {
          const studentInfo = { name: student, house: createdHouse }
          StudentModel.create(studentInfo, (error, createdStudent) => {
            if (error) {
              console.error(`Error creating ${student}`)
            } else {
              console.info(`Student ${createdStudent.name} created`)
            }
          })
        })
      }
    })
  })
})

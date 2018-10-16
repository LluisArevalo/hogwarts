const StudentModel = require('../../models/students')

async function getStudents() {
  return new Promise(resolve => {
    StudentModel.find((error, students) => {
      if (error) {
        throw new Error(`Error fetching students. Details: ${error}`)
      }

      return resolve(students)
    })
  })
}

async function getStudentsByHouse(house) {
  return new Promise(resolve => {
    StudentModel.find({ house }, (error, students) => {
      if (error) {
        throw new Error(`Error fetching students from ${house}`)
      }

      return resolve(students)
    })
  })
}

module.exports = {
  getStudents,
  getStudentsByHouse
}

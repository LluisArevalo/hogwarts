const axios = require('axios')
const graphqlUrl = 'http://localhost:3000/graphql'

describe('GraphQL Schema', () => {
  describe('Queries', () => {
    describe('Houses', () => {
      it('Should return all the houses', async () => {
        const response = await axios.post(graphqlUrl, {
          query: `query { houses { name } }`
        })
        const { houses } = response.data.data

        expect(response.status).toBe(200)
        expect(response.statusText).toBe('OK')
        expect(houses).toContainEqual({ name: 'Gryffindor' })
        expect(houses).toContainEqual({ name: 'Slytherin' })
        expect(houses).toContainEqual({ name: 'Ravenclaw' })
        expect(houses).toContainEqual({ name: 'Hufflepuff' })
      })
    })

    describe('Students', () => {
      it('Should return the main characters', async () => {
        const response = await axios.post(graphqlUrl, {
          query: `query { students { name } }`
        })
        const { students } = response.data.data

        expect(response.status).toBe(200)
        expect(response.statusText).toBe('OK')
        expect(students).toContainEqual({ name: 'Harry Potter' })
        expect(students).toContainEqual({ name: 'Hermione Granger' })
        expect(students).toContainEqual({ name: 'Ron Weasley' })
        expect(students).toContainEqual({ name: 'Draco Malfoy' })
        expect(students).toContainEqual({ name: 'Luna Lovegood' })
      })
    })

    describe('Student Houses', () => {
      let students;
      beforeAll(async() => {
        const response = await axios.post(graphqlUrl, {
          query: `query { students { name house } }`
        })

        students = response.data.data.students
      })

      it('Harry Potter should be in Gryffindor', () => {
        const harryPotter = students.find(student => student.name === 'Harry Potter')
        expect(harryPotter.house).toBe('Gryffindor')
      })

      it('Draco Malfoy should be in Slytherin', () => {
        const dracoMalfoy = students.find(student => student.name === 'Draco Malfoy')
        expect(dracoMalfoy.house).toBe('Slytherin')
      })

      it('Luna Lovegood should be in Ravenclaw', () => {
        const lunaLovegood = students.find(student => student.name === 'Luna Lovegood')
        expect(lunaLovegood.house).toBe('Ravenclaw')
      })
    })
  })

  describe('Mutations', () => {
    describe('Add points to house', () => {
      let house
      beforeEach(async () => {
        const response = await axios.post(graphqlUrl, {
          query: `query { houses { name points } }`
        })

        const { houses } = response.data.data
        house = houses.find(house => house.name === 'Gryffindor')
      })

      it('Should add 10 points to Gryffindor', async () => {
        const response = await axios.post(graphqlUrl, {
          query: `mutation { addPointsToHouse(points: 10, house:"Gryffindor") {
            name
            points
          } }`
        })
        const updatedHouse = response.data.data.addPointsToHouse

        expect(response.status).toBe(200)
        expect(response.statusText).toBe('OK')
        expect(updatedHouse.points).toBe(house.points + 10)
      })
    })
  })
})

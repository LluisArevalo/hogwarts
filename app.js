require('./db')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./api/schema')
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/graphql', bodyParser.json(), graphqlHTTP({
  schema,
  graphiql: true
}))

const server = app.listen(process.env.PORT || 3000, () => {
  console.info(`Server started on port ${server.address().port}`)
})

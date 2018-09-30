const mongoose = require('mongoose')
const Schema = mongoose.Schema

const House = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports = mongoose.model('Houses', House)

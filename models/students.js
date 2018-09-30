const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  house: {
    type: Schema.Types.ObjectId,
    ref: 'Houses'
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

module.exports = mongoose.model('Students', Student)

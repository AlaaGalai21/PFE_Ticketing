const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
  title: {
    type: String
  },
  organizer: {
    type: String
  },
  time: {
    type: String
  },
  type: {
    type: String
  },
  description: {
    type: String
  }
}, {
    collection: 'events'
  })

module.exports = mongoose.model('Event', eventSchema)
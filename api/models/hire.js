const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const hireSchema = new mongoose.Schema({
  photo: {
    data: Buffer,
    contentType: String
  },
  title: {
    type: String,
    required: true,
  },
  hireKlass: {
    type: String,
    required: false,
  },
  helm: {
    type: String,
    required: false,
  },
  shoulders: {
    type: String,
    required: false,
  },
  gloves: {
    type: String,
    required: false,
  },
  chestArmor: {
    type: String,
    required: false,
  },
  belt: {
    type: String,
    required: false,
  },
  pants: {
    type: String,
    required: false,
  },
  boots: {
    type: String,
    required: false,
  },
  bracers: {
    type: String,
    required: false,
  },
  amulet: {
    type: String,
    required: false,
  },
  ring1: {
    type: String,
    required: false,
  },
  ring2: {
    type: String,
    required: false,
  },
  weapon: {
    type: String,
    required: false,
  },
  offhand: {
    type: String,
    required: false,
  },
  hireToken: {
    type: String,
    required: false,
  },
  gemNotes: {
    type: String,
    required: false,
  },
  skill1: {
    type: String,
    required: false,
  },
  skill2: {
    type: String,
    required: false,
  },
  skill3: {
    type: String,
    required: false,
  },
  skill4: {
    type: String,
    required: false,
  },
  generalBuildNotes: {
    type: String,
    required: false,
  },
  postedBy: {
    type: ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date,
  likes: [{ type: ObjectId, ref: 'User' }],
  comments: [
    {
      text: String,
      created: { type: Date, default: Date.now },
      postedBy: { type: ObjectId, ref: 'User' }
    }
  ]
})

module.exports = mongoose.model('Hire', hireSchema)
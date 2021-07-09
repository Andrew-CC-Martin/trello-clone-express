import mongoose from "mongoose"
import normalize from 'normalize-mongoose'

export const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  created_at: {
    type: Date,
    required: true
  },
  modified_at: {
    type: Date,
    required: true
  }
})
cardSchema.plugin(normalize)

export const Card = mongoose.model("Card", cardSchema)

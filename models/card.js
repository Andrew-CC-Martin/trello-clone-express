import mongoose from "mongoose"

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

export const Card = mongoose.model("Card", cardSchema)

import { Card } from "../models/card.js"

export const getAllCards = () => Card.find()

export const addCard = (req) => {
  const date = Date.now()
  req.body.created_at = date
  req.body.modified_at = date
  return Card(req.body)
}

export const destroyCard = (req) => Card.deleteOne({ _id: req.params.id })

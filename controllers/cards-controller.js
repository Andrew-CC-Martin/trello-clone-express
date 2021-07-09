import { getAllCards, addCard, destroyCard } from "../utils/cards-utils.js"

export const getCards = (_req, res) => {
  getAllCards().exec((err, cards) => {
    if (err) {
      res.status(500)
      return res.json({ error: err.message })
    }

    res.send(cards)
  })
}

export const newCard = (req, res) => {
  addCard(req).save((err, card) => {
    if (err) {
      res.status(500)
      return res.json({ error: err.message })
    }
    res.send(card)
  })
}

export const deleteCard = (req, res) => {
  destroyCard(req).exec((err, card) => {
    if (err) {
      res.status(500)
      return res.json({ error: err.message })
    }

    res.send(card)
  })
}

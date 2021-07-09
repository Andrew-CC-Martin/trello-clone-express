import express from "express"

import { getCards, newCard } from "../controllers/cards-controller.js"

export const cardsRouter = express.Router()

cardsRouter.get("/cards", getCards)
cardsRouter.post("/cards", newCard)

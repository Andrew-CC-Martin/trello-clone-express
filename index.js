import express from "express"
import cors from "cors"
import mongoose from "mongoose"

import { constants } from "./constants.js"
import { cardsRouter } from "./routes/cards-routes.js"

const { PORT } = constants

const app = express()
const dbConn = "mongodb://localhost/trello_clone_db"

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect(
  dbConn,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      console.log("No database connection")
    } else {
      console.log("Connected to the database")
    }
  }
)

app.use(cardsRouter)

app.listen(PORT)

import express from 'express'

import cors from 'cors'
import morgan from 'morgan'

import './models/Cards.js'
import './models/Decks.js'
import './models/Users.js'
import { cardRoute } from './routes/card.routes.js'
import { cardDeckRoute } from './routes/cardDeck.routes.js'
import { sequelize } from './utils/dbutils.js'
import { ConnectionError } from './errors/errorsFactory.js'

export const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({ origin: '*' }))
app.get('/', (_req, res) => {
  res.send('API Express').end()
})
app.use('/decks', cardDeckRoute)
app.use('/cards', cardRoute)

export async function connect() {
  try {
    await sequelize.sync({ alter: true })
    console.log('Correct ✅')
  } catch (e) {
    throw new ConnectionError('Error')
  }
}

const serverStart = async () => {
  try {
    await connect()
  } catch (e) {
    console.log(e)
  }
}
app.listen(3001)

serverStart()

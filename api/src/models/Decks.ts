import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'

import { sequelize } from '../utils/dbutils.js'
import { Card, Cards } from './Cards.js'
import { Users } from './Users.js'

export const Decks = sequelize.define(
  'deck',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inCommunity: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

// One to Many
Decks.hasMany(Cards, {
  foreignKey: 'deckID',
  sourceKey: 'id'
})
Cards.belongsTo(Decks, {
  foreignKey: 'deckID',
  targetKey: 'id'
})

// Many to Many
Decks.belongsToMany(Users, { through: 'userCollections' })
Users.belongsToMany(Decks, { through: 'userCollections' })

export class Deck extends Model<InferAttributes<Deck>, InferCreationAttributes<Deck>> {
  declare id: CreationOptional<string>
  declare name: string
  declare inCommunity: boolean
  declare description: string
}

export class DeckWithCards extends Deck {
  declare cards: Card[]
}

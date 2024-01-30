import { DataTypes } from 'sequelize'

import { sequelize } from '../utils/dbutils.js'
import { Cards } from './Cards.js'
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

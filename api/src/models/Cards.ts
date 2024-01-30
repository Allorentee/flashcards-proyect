import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize'

import { sequelize } from '../utils/dbutils.js'

const Cards = sequelize.define(
  'Cards',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    front: {
      type: DataTypes.STRING,
      allowNull: false
    },
    back: {
      type: DataTypes.STRING,
      allowNull: false
    },
    example: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
)

export { Cards }

export class Card extends Model<InferAttributes<Card>, InferCreationAttributes<Card>> {
  declare id: CreationOptional<string>
  declare front: string
  declare back: string
  declare example: string
  declare deckID: CreationOptional<string>
}

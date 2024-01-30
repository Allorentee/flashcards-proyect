import { DataTypes } from 'sequelize'

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

import { DataTypes } from 'sequelize'

import { sequelize } from '../utils/dbutils.js'

export const Users = sequelize.define(
  'Users',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    config: {
      type: DataTypes.JSON,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
)

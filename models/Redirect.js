const { DataTypes } = require('sequelize')
const sequelize = require('../db/connectDB')
const User = require('./User')

const Redirect = sequelize.define('Redirect', {
    redirectId: {
        type: DataTypes.STRING
    },
    destination: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    }
})

Redirect.sync()

module.exports = Redirect
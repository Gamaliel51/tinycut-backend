const  { DataTypes } = require('sequelize')
const sequelize = require('../db/connectDB')
const Redirect = require('./Redirect')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    accountType: {
        type: DataTypes.STRING
    }
})

User.sync()

module.exports = User
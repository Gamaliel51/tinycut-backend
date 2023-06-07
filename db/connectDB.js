const { Sequelize } = require('sequelize')
require('dotenv').config()

console.log(process.env.DB_STRING)
const sequelize = new Sequelize('neondb', 'miraclendukwe51', 'JkdF62wCcGvW', {
    host: 'ep-dry-bird-115731.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

sequelize.authenticate().then(() => {
    console.log('Connected Successfully')
})

module.exports = sequelize
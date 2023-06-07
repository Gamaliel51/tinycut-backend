const express = require('express')
const cors = require('cors')
const Login = require('./routes/login')
const Register = require('./routes/register')

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/login', Login)
app.use('/register', Register)

app.get('/:id' , (req, res) => {
    const urlId = req.params.id
    let ipadd = req.headers['x-forwarded-for'] || req.headers['x-forwarded'] || req.socket.remoteAddress
    res.send(ipadd)

})


app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
})
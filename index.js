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
    console.log(req.ip)
    const nav = new Navigator()
    nav.geolocation.getCurrentPosition(req.socket.remoteAddress)
    res.send(req.ip)

})


app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
})
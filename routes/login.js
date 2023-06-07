const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { checkAuth } = require('../controllers/authMiddleware')
const router = express.Router()


router.post('/', checkAuth, async (req, res) => {
    const { username, password } = req.body

    if(req.user){
        return res.json({status: 'succes', message: 'loggedin'})
    }

    const user = await User.findOne({where: {username: username}})

    if(user){
        const passcheck  = await bcrypt.compare(password, user.password)
        console.log('pascheck: ', passcheck)
        if(passcheck){
            const token = jwt.sign({username: user.username}, process.env.ACCESS_KEY, {expiresIn: '1d'})
            return res.json({status: 'success', accesstoken: token})
        }
        return res.json({status: 'fail', error: 'wrong username or password'})
    }

    res.json({status: 'fail', error: 'wrong username or password'})

})


module.exports = router
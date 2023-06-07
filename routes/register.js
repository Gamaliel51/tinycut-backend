const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const router = express.Router()

router.post('/', async (req, res) => {
    const  { username, password, accountType } = req.body

    const in_use = await User.findOne({where: {username: username}})
    if(in_use){
        return res.json({status: 'fail', error: 'username already in use'})
    }

    const hashedPass = await bcrypt.hash(password, 10)

    const user = await User.create({username: username, password: hashedPass, accountType: accountType})
    await user.save()

    res.json({status: 'success'})

})

module.exports = router
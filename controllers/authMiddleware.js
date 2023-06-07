const jwt = require('jsonwebtoken')


const checkAuth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader.split(' ')[1]
    if(!authHeader){
        next()
    }
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        if(err){
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
    
}

module.exports = { checkAuth }
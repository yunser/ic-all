const routers = require('express').Router();

routers.post('/asd',(req,res,next) => {
    res.send('asd')
})

module.exports = routers

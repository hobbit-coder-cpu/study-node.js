const model = require('../models/users.model').users

function getUser(req, res) {
    const userId = Number(req.params.userId);
    if(userId < 0 || userId > model.length) {
        res.sendStatus(404)
        return
    }

    res.send(model[userId])
}

function getUsers(req, res) {
    res.json(model)
}

// 라우트 파라미터(Route parameters)
// https://expressjs.com/en/guide/routing.html
function postUser(req, res) {
    console.log(`reqBody: ${req.body}`) // undefined ! - body parser 미들웨어 등록 필요.
    
    if(!req.body.name) {
        res.status(400).json({
            error: "Missing user name"
        })
        return 
    }
    const newUser = {
        id: model.length,
        name: req.body.name
    }
    console.log(newUser)
    model.push(newUser)

    res.json(newUser)
}

module.exports = {
    getUser,
    getUsers,
    postUser
}

const PORT = 8080

const Users = [
    {id: 0, name: "Jack"},
    {id: 1, name: "Jennifer"},
]

const express = require('express')
const app = express()

// 라우트 파라미터(Route parameters)
// https://expressjs.com/en/guide/routing.html
app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    if(userId < 0 || userId > Users.length) {
        res.sendStatus(404)
        return
    }
    res.send(Users[userId])
})

app.get('/', (req, res) => {
    
    console.log('called requestListener!')
    res.send('Hello World')
})


app.listen(PORT, () => {
    console.log(`Running on`)
})

const PORT = 8080

const Users = [
    {id: 0, name: "Jack"},
    {id: 1, name: "Jennifer"},
]

const express = require('express')

console.log('express:', express)

const app = express()

// 라우터 파라미터
app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    if(userId < 0 || userId > Users.length) {
        res.sendStatus(404)
        return
    }
    res.send(Users[userId])
})

app.get('/users', (req, res) => {
    res.send(Users)
})

app.get('/', (req, res) => {
    
    console.log('called requestListener!')
    res.send('Hello World')
})

console.log('app:', app)

app.listen(PORT, () => {
    console.log(`Running on`)
})

/* 
// node.js 와 비교 

const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    console.log('called requestListener!!!')
    res.end('hello')
})

server.listen(PORT, ()=> {
    console.log(`Running on`)
})
 */
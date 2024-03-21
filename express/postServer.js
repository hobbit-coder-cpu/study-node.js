const PORT = 8080

const users = [
    {
        id: 0, 
        name: 'Jack'
    },
    {
        id: 1, 
        name: 'Jennifer'
    }
]

const express = require('express')

const app = express()

// body parser 등록. 
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
app.use(express.json()) 

app.use((req, res, next) => {
    const start = Date.now()
    console.log(`${req.method} ${req.url}`)
    next()

    const diffTime = Date.now() - start
    console.log(`${req.method} ${req.url} ${diffTime}ms`)
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('/users', (req, res) => {
    console.log(`reqBody: ${req.body}`) // undefined ! - body parser 미들웨어 등록 필요.
    
    if(!req.body.name) {
        res.status(400).json({
            error: "Missing user name"
        })
        return 
    }
    const newUser = {
        id: users.length,
        name: req.body.name
    }
    console.log(newUser)
    users.push(newUser)

    res.json(newUser)
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})
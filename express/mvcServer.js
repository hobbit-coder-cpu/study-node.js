const PORT = 8080


const usersController = require('./controllers/users.controller')
const postsController = require('./controllers/posts.controller')
const express = require('express')
const app = express()

/*********************************************
 * body parser 등록.
 *********************************************/

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
app.use(express.json()) 

app.use((req, res, next) => {
    const start = Date.now()
    console.log(`${req.method} ${req.url}`)
    next()

    const diffTime = Date.now() - start
    console.log(`${req.method} ${req.url} ${diffTime}ms`)
})



/***************************************************
 * Routing 
 **************************************************/

 app.get('/', (req, res) => {
    res.send('Hello World')
})

// 라우트 파라미터(Route parameters)
// https://expressjs.com/en/guide/routing.html
app.get('/users/:userId', usersController.getUser)
app.get('/users', usersController.getUsers)
app.post('/users', usersController.postUser)

app.get('/posts', postsController.getPosts)

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})

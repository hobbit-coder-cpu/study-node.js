const PORT = 8080

const express = require('express')
const app = express()

/*********************************************
 * body parser middleware 등록.
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
 * Router middleware 등록 
 **************************************************/
 const usersRouter = require('./routes/users.router.js')
 const postsRouter = require('./routes/posts.router.js')
 
app.use('/users', usersRouter)
 app.use('/posts', postsRouter)

 app.get('/', (req, res) => {
    res.send('Hello World')
})




app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})

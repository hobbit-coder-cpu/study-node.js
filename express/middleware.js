const PORT = 8080

const express = require('express')

// 미들웨어 동작 
// Request -> (middleware #1) -> (middleware #2) -> ...  main task 
//                                                             | 
//            (middleware #1) <- (middleware #2) <- ...      <--  Response 

let reqSeq = 0
let resSeq = 0

const app = express()
app.use((req, res, next) => {
    const start = Date.now()
    console.log(`[M1] start: ${req.method} ${req.url} ${reqSeq++} `)
    next()
    const diffTime = Date.now() - start
    console.log(`[M1] end: ${req.method} ${req.url} ${diffTime}ms ${resSeq++}`)

})

app.use((req, res, next) => {
    const start = Date.now()
    console.log(`[M2] start: ${req.method} ${req.url} ${reqSeq++} `)
    next()
    const diffTime = Date.now() - start
    console.log(`[M2] end: ${req.method} ${req.url} ${diffTime}ms ${resSeq++}`)

})

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`)
})
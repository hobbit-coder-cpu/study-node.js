const PORT = 8080

const path = require('path')
const express = require('express')
const app = express()

/*********************************************
 * body parser middleware 등록.
 *********************************************/
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
app.use(express.json()) 

app.use((req, res, next) => {
    const start = Date.now()
    console.log(`method: ${req.method} url: ${req.url}`)
    next()

    const diffTime = Date.now() - start
    console.log(`method: ${req.method} originalUrl: ${req.originalUrl} baseUrl: ${req.baseUrl} url: ${req.url} ${diffTime}ms`)
})

/***************************************************
 * Router middleware 등록 
 **************************************************/
 const usersRouter = require('./routes/users.router.js')
 const postsRouter = require('./routes/posts.router.js')
 
app.use('/users', usersRouter)
app.use('/posts', postsRouter)

// 가상경로 지정
// express.static 함수가 제공하는 파일에 대한 가장 경로 접두사
// app.use('/jungwon', express.static('public'))
// http://localhost:8080/jungwon/images/haerin.JPG
// http://localhost:8080/jungwon/css/style.css
// http://localhost:8080/jungwon/index.html

// 절대  경로 사용 
// express.static 함수에 제공하는 경로는 노드 프로세스를 시작하는 
// 상대적 디렉토리로 다른 디렉토리에서 익스프레스 앱을 실행하는 경우 
// 절대 경로를 사용해야 안전(즉, 상대경로 지정도 다른 디렉토리에서 앱 실행시 문제 발생)
app.use('/jungwon', express.static(path.join(__dirname, 'public')))


 app.get('/', (req, res) => {
    res.send('Hello World')
})




app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})

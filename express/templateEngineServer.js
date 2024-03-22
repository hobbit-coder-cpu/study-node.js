/**
 * Template Engine 사용하기
 * Express.js는 템플릿 엔진을 통해 서버측 애플리케이션에서 동적 HTML 페이지를 생성하는 방법 제공
 
* 동적인 결과(데이터)를 정적인 파일(HTML)에 담아 줍니다.
 * Data + Template --(Template Engine)--> HTML Document
 * Template 예) <h1>{{imageTitle}}</h1>
 * 
 * Template Engine 종류 
 * Pug, EJS, hbs
 */



const PORT = 8080

const path = require('path')
const express = require('express')
const app = express()

/*********************************************************
 *  Template Engine Setting 
 **********************************************************/
// 템플릿 엔진 등록 
app.set('view engine', 'hbs') // app.set('view engine', 'pug')
// view 파일들이 모여있는 폴더 명시 
app.set('views', path.join(__dirname, 'views'))

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
app.use('/jungwon', express.static(path.join(__dirname, 'public')))


 app.get('/', (req, res) => {
    // template engine 사용 
    res.render('index', {
        imageTitle: "She is haerin"
    })
})


app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})

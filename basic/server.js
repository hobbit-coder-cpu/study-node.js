const http = require('http') 

const requestListener = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    res.end('Hello world')
    /* 
    [JSON 데이터 전송 시]

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    res.end(JSON.stringify({
        a: 'A',
        b: 'b'
    }))
     */
}

// 방법 #1
const server = http.createServer(requestListener)

// 또는 
// 방법 #2
// const server = http.createServer()
// server.on("request", requestListener) 
 

const PORT = 3000 
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})




const http = require('http') 

const requestListener = (req, res) => {
    if(req.url === '/home' && req.method === 'POST') {
        req.on('data', (data) => {
            const stringifiedData = data.toString()
            console.log("stringifiedData: ", stringifiedData)
            let dataObject; 
            Object.assign(dataObject, JSON.parse(stringifiedData))
        
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                a: "a",
                b: "b",
                ...dataObject
            }))
        
        })
    } 
   
}


const server = http.createServer(requestListener)

const PORT = 3000 
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})




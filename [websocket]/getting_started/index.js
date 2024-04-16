const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new socketIO.Server(server)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected!:');
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(8000, () => {
  console.log('server running at http://localhost:8000')
})
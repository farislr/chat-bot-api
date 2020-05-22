import express from 'express'
import http from 'http'
import socket from 'socket.io'
import path from 'path'

const app = express()
const server = http.createServer(app)
const io = socket(server)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public') + '/index.html')
})

const start = (): void => {
  try {
    io.on('connection', (socket) => {
      console.log('a user connected')

      socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
      })

      socket.on('disconnect', () => {
        socket.broadcast.emit('user disconnect', 'is disconnected')
      })
    })
    server.listen(3000, () => console.log('connected to :3000'))
  } catch (e) {
    console.log(e)
  }
}

start()

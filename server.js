const express=require('express')
const socketio=require('socket.io')
const http=require('http')

const app=express();  //here we want both app and socketio to run on the same http server...app is like a middleware which can handle get & post requests
const server=http.createServer(app)
const io=socketio(server)   //io is our socket.io server

var gpio=require('onoff').Gpio
var LED=new Gpio(4,'out')


app.use('/',express.static(__dirname+'/frontend'))

io.on('connection',(socket)=>{
    console.log("connection established on "+ socket.id);
    socket.emit('connected')
    socket.on('Led_status',(data)=>{
        console.log(data.key)
        LED.writeSync(data.key)
    })

})

server.listen(4000,()=>{
    console.log('Server started')
})
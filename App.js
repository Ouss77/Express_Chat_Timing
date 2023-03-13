const express = require("express");
const app = express();
const myLogger = require('./midelware')
app.use(myLogger)

app.get('/', (req, res, next) => {
    //res.send("Welcome to the home page ");
    res.sendFile(__dirname + "/Home.html")
})
app.get('/services', (req, res, next) => {
    //res.send("Welcome to the Services page ");
    res.sendFile(__dirname + "/Services.html")
})
app.get('/contact', (req, res, next) => {
    //res.send("Welcome to the Contact page ");
    res.sendFile(__dirname + "/Contact.html")
})

const server = app.listen(3005, () => {
    console.log("connected to the url http://127.0.0.1:3005/contact")
})

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", function(socket){ 
    console.log("The user is connected")
    socket.on('disconnect', function(){
        console.log("user disconnected")
    });

    socket.on('chat message', function(msg){
        console.log("message : "+msg.sms)
        console.log("user : "+msg.user )
        io.emit('chat message', msg.user + ": " +msg.sms)
    })
})

const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    server = app.listen(port,() => console.log(`Listening on port ${port}`)),
    io = require('socket.io')(server, {cors: true});

    app.use(cors());

    const chats = [];

    io.on('connection', socket => {
        console.log(socket.id);

        socket.emit("Welcome", {msg:"Hello from the server"});

        socket.on("addToChat",data => {
            chats.push(data);
            socket.broadcast.emit("updatingMessages",chats);
        })
    })


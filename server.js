 var express = require('express');
 var app = express();
 var socket = require("socket.io")
 var client = require('socket.io-client');
 var server = app.listen(300);
 var io = socket(server);
 var socketToMirror;
 console.log("running on 300;")

 //mirrir
 // io.on('connection', function(socket) {
 //        console.log("connected")
 //        socket.emit("like",2121);
 //        // socketToMirror = client('http://192.168.31.87/mirror');
 //        // socketToMirror.on("like",function(like){
 //        //   console.log(like)
 //        // })
 // })
 io.on('connection', function (socket) {
           console.log('client connection');
           socketToMirror = client('http://127.0.0.1/mirror');
           socketToMirror.on("initLikes",function(like){
                socket.emit("like", { like: like });
           })
           socketToMirror.on("like",function(like){
                socket.emit("like", { like: like });
                console.log(like)
           })
    //触发客户端注册的自定义事件



});


 //socket

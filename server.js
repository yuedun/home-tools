var express = require('express')
var ejs = require("ejs");
var path = require("path");
var app = express();
var SocketServer = require("./socket-server.js");

// view engine setup环境变量设置
app.set('views', __dirname);
app.engine('.html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname));

/**
 * 首页
 */
app.get('/', function (req, res) {
    res.render("index.html")
})

/**
 * 发送通知
 */
app.get('/sendMsg', function (req, res) {
    SocketServer.sendMsg()
    res.send("ok")
})
var server = app.listen(3000);

var io = require("socket.io")(server);
io.on('connection', function (socket) {
    SocketServer.init(socket);
});
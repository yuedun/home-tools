
var gso;
exports.init = function (socket) {
    gso = socket;
    socket.on('reciveMsg', function (data) {
        console.log(data);
    });

}
exports.sendMsg = function(){
    gso.emit("message", { msg: "收割机热偶发加热欧冠哦劲歌热舞我激光焊接" })
}

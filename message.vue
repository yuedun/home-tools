<template>
<div id="message">
	<p @click="reciveMsg()"><span>消息：</span><span>{{message}}</span></p>
</div>
</template>

<script>
import io from "socket.io-client";
var socket = io("http://localhost:3000");

export default {
  data() {
    return {
      message: " "
    };
  },
  created() {
	var that = this;
    socket.on("connect", function() {});
    socket.on("event", function(data) {});
    socket.on("disconnect", function() {});
	socket.on("message", function(data) {
	  console.log(data);
	  that.message = data.msg;
	  that.$parent.backgroundClass = "b2";
    });
  },
  methods: {
	  reciveMsg: function(){
		  socket.emit("reciveMsg", "接收到消息");
	  }
  }
};
</script>

<style type="text/css">
#message {
  font-size: 2em;
}
</style>
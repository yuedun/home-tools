<template>
<div id="message">
	<p @click="reciveMsg()"><span v-show="show">新消息：{{message}}</span></p>
</div>
</template>

<script>
import io from "socket.io-client";
var socket = io(location.host, {
        'reconnection': true,
        'reconnectionDelay': 5000,
        'reconnectionDelayMax': 10000,
        'reconnectionAttempts': 3
    });

export default {
  data() {
    return {
      message: " ",
      show: false
    };
  },
  created() {
    var that = this;
    socket.on("connect", function() {});
    socket.on("event", function(data) {});
    socket.on("disconnect", function() {});
    socket.on("message", function(data) {
      that.show = true;
      that.message = data.msg;
    });
  },
  methods: {
    reciveMsg: function() {
      this.show = false;
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
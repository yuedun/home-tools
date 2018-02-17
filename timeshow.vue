<template>
<div id="time">{{clock}}</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      clock: new Date().toLocaleString(),
    };
  },
  template: '<div id="time">{{clock}}</div>',
  created: function() {
    var that = this;
    setInterval(function() {
      var d = new Date();
      that.clock = d.toLocaleString();
      //晚上10点后背景黑色
      if (d.getHours()>=22 || d.getHours() <= 6) {
        that.$parent.backgroundClass = "black";
      }
    }, 1000);
  }
};
</script>
<style type="text/css">
	#time{
		font-size: 4.3em;
		font-weight: bold;
		text-align: center;
	}
</style>
<template>
<div id="timecontent">
  <div>
    <div id="time"><span id="hour">{{hour}}</span><span id="second">:{{second}}</span></div>
    <div id="day"><span>{{day}}</span><span>{{week}}</span></div>
  </div>
</div>
</template>

<script type="text/javascript">
import moment from "moment";
export default {
  data() {
    var d = moment();
    return {
      day: this.formatDate(d),
      hour: this.formatTime(d),
      second: d.second(),
      week: d.weekday(),
    };
  },
  created: function() {
    var that = this;
    setInterval(function() {
      var d = moment();
      that.day = that.formatDate(d);
      that.time = that.formatTime(d);
      that.second = d.second();
      //晚上10点后背景黑色
      if (d.hour() >= 22 || d.hour() <= 6) {
        that.$parent.backgroundClass = "night";
      } else {
        that.$parent.backgroundClass = "b1";
      }
    }, 1000);
  },
  methods: {
    formatTime(m) {
      return m.format("HH:mm");
    },
    formatDate(m) {
      return m.format("YYYY/MM/DD");
    }
  }
};
</script>
<style type="text/css">
#timecontent {
  font-weight: bold;
  text-align: center;
}
#time #hour {
  font-size: 6.7em;
}
#time #second {
  font-size: 3em;
}
#day > span {
  display: inline-block;
  width: 50%;
  font-size: 1.8em;
}
</style>
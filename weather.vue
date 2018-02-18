<template>
<div id="weather">
  <ul>
    <li>今天 {{weathers[0].cond.cond_d+"/"+weathers[0].cond.cond_n}} {{weathers[0].tmp.max+"/"+weathers[0].tmp.min}}℃</li>
    <li>明天 {{weathers[1].cond.cond_d+"/"+weathers[1].cond.cond_n}} {{weathers[1].tmp.max+"/"+weathers[1].tmp.min}}℃</li>
    <li>后天 {{weathers[2].cond.cond_d+"/"+weathers[2].cond.cond_n}} {{weathers[2].tmp.max+"/"+weathers[2].tmp.min}}℃</li>
  </ul>
</div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      weathers: [{
        cond:{cond_d:"", cond_n:""},
        tmp:{max:"", min:""}
      },{
        cond:{cond_d:"", cond_n:""},
        tmp:{max:"", min:""}
      },{
        cond:{cond_d:"", cond_n:""},
        tmp:{max:"", min:""}
      }]
    };
  },
  created(){
    this.getWeather();
  },
  methods: {
    getWeather(){
      var that = this;
      axios.get("/getWeather")
      .then(res=>{
        console.log(res.data);
        that.weathers = res.data.forecast;
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>
<style type="text/css">
#weather > ul {
  list-style: none;
  font-size: 2em;
}
</style>
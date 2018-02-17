<template>
<div id="weather">
  <ul>
    <li v-for="(w, index) in weathers" :key="index">{{w}}</li>
  </ul>
</div>
</template>

<script type="text/javascript">
export default {
  data(){
    return {
      weathers: ["今天 阴 11/4℃", "明天 晴 17/6℃", "后天 多云 13/5℃"]
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
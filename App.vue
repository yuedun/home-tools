<template>
  <div id="app" @click="changeBackground()" :class="backgroundClass" :style="{height: h + 'px'}">
	  <weather></weather>
    <timeshow></timeshow>
	  <todo></todo>
		<message></message>
	  <p>
	    <!-- 使用 router-link 组件来导航. -->
	    <!-- 通过传入 `to` 属性指定链接. -->
	    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
	    <!-- <router-link to="/foo">Go to Foo</router-link>
	    <router-link to="/bar">Go to Bar</router-link> -->
	  </p>
	  <!-- 路由出口 -->
	  <!-- 路由匹配到的组件将渲染在这里 -->
	  <!-- <router-view></router-view> -->
	</div>
</template>

<script>
import timeshow from "./timeshow.vue";
import weather from "./weather.vue";
import todo from "./todo.vue";
import message from "./message.vue";

export default {
  data() {
    return {
      h: 300,
      backgroundClass: "b1"
    };
  },
  created(){
    var domh = window.outerHeight;
    this.h=domh;
  },
  methods: {
    changeBackground: function() {
      this.backgroundClass = "b1";
    }
  },
  components: {
    timeshow,
    weather,
		todo,
		message
  }
};
</script>

<style type="text/css">
body {
  margin: 0;
  padding: 0;
  color: #0099FF;
	text-align: center;
}
.b1 {
  background-color: #006633;
}
.b2 {
  background-color: red;
}
.night {
  background-color: #010111;
}
</style>
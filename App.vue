<template>
  <div id="app" @click="changeBackground()" :class="backgroundClass">
		<h1>Hello App!</h1>
	  <p>
	    <!-- 使用 router-link 组件来导航. -->
	    <!-- 通过传入 `to` 属性指定链接. -->
	    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
	    <router-link to="/foo">Go to Foo</router-link>
	    <router-link to="/bar">Go to Bar</router-link>
	    <timeshow></timeshow>
	    <weather></weather>
	    <todo></todo>
	  </p>
	  <!-- 路由出口 -->
	  <!-- 路由匹配到的组件将渲染在这里 -->
	  <router-view></router-view>
	</div>
</template>

<script>
import todo from './todo.vue';
export default {
  name: 'App',
  data(){
  	return {
  		backgroundClass: "b1"
  	}
  },
  methods: {
		changeBackground: function(){
			this.backgroundClass = "b2";
		}
	},
	components: {
		todo
	}
}
</script>

<style type="text/css">
	#time{
		font-size: 3em;
		font-weight: bold;
		text-align: center;
		margin: 20px auto;
	}
	#weather{
		
	}
	#weather >ul{
		list-style: none;
   	font-size: 2em;
	}
	.b1{
		background-color: red; 
	}
	.b2{
		background-color: green;
	}
</style>
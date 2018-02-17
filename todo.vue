<template>
<ul id="todo-list">
	<li v-for="(item, index) in list" :key="index">{{item}}</li>
</ul>
</template>

<script>
export default {
	data(){
		return {
			list: ["待办事项一", "待办事项二", "待办事项三"]
		}
	}
}
</script>

<style type="text/css">
	#todo-list{
		font-size: 2em;
		list-style: none;
	}
</style>
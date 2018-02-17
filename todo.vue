<template>
<ul>
	<li v-for="item in list">{{item}}</li>
</ul>
</template>

<script>
export default {
	name: "todo",
	data(){
		return {
			list: ["ejtgreog", "ehgoireno", "oijnfodisngfo", "orejjbomvorsfr"]
		}
	}
}
</script>
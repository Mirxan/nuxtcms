<template>
    <div></div>
</template>
<script>
	export default{
		layout:'admin',
		beforeRouteEnter(to,from,next){
			next('/cms/dashboard')
		}
	}
</script>

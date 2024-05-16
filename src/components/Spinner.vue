<template>
	<div class="spin">
		<div class="loading"></div>
		<span>Loading ...</span>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.spin {
	margin: 30px auto;
	text-align: center;
}
.loading {
	width: 40px;
	height: 40px;
	margin: 10px auto;
	border: 3px solid transparent;
	border-top-color: crimson;
	border-radius: 50%;
	animation: loading 2s infinite;
}
@keyframes loading {
	to {
		transform: rotate(360deg);
	}
}
</style>

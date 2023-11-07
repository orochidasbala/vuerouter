<template>
	<div class="bg-blur"></div>
	<div class="bg-text">
		<h2>Announcement</h2>
		<hr />
		<h1 class="text-warning" style="font-size: 50px">Warning</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
			laboriosam sit inventore dolore est eum aliquid, sequi delectus iure
			qui.
		</p>
		<hr />
		<button class="btn bg-warning" @click="closeWarning">
			Ok, Understant
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		closeWarning() {
			this.$emit("close");
		}
	}
};
</script>

<style scoped>
.bg-blur {
	background-color: rgb(0, 0, 0); /* Black w/opacity/see-through */
	background-color: rgb(0, 0, 0, 0.6); /* Black w/opacity/see-through */
	width: 100%;
	height: 100%;
	filter: blur(1px);
	border-radius: 10px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
}
/* Position text in the middle of the page/image */
.bg-text {
	background-color: rgb(0, 0, 0, 0.9); /* Black w/opacity/see-through */
	color: white;
	font-weight: bold;
	border: 3px solid #f1f1f1;
	border-radius: 10px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	width: 80%;
	padding: 20px;
	text-align: center;
}
</style>

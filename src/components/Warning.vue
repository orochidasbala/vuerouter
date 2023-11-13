<template>
	<div class="bg-blur"></div>
	<div class="bg-text">
		<!-- <h2>Announcement</h2> -->
		<i
			class="text-warning bi bi-exclamation-octagon"
			style="font-size: 30px"
		></i>
		<h1 class="text-warning" style="font-size: 50px">Warning</h1>
		<hr />
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
			laboriosam sit inventore dolore est eum aliquid, sequi delectus iure
			qui.
		</p>
		<hr />
		<button class="btnn btn btn-dark text-light" @click="closeWarning">
			Understant
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
	background-color: rgb(0, 0, 0, 0.7); /* Black w/opacity/see-through */
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
	border: 3px solid #64ccc5;
	border-radius: 10px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1100;
	max-width: 600px;
	min-width: 350px;
	padding: 20px;
	text-align: center;
	box-shadow: 0px 0px 10px #64ccc5;
}
.text-warning {
	text-transform: uppercase;
	font-family: "Poppins";
}
.btnn {
	width: 150px;
	border: none;
	border-radius: 30px;
	padding: 13px 10px;
	text-transform: uppercase;
	font-family: "Poppins";
}
</style>

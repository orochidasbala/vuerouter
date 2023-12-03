<template>
	<ul class="list-group list-group-flush text-start">
		<li class="list-group-item">
			<i class="bi bi-arrow-right-square"></i>
			<span> Facebook </span>
			<div class="container-fluid">
				<div class="detailbox p-2">
					<input
						type="text"
						v-model="link"
						class="form-control"
						readonly
					/>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
import { ref } from "vue";
export default {};
</script>

<style scoped>
.container-fluid {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
}
.list-group-item .bi,
.name {
	text-transform: uppercase;
	color: rgb(2, 49, 110);
	margin-left: 20px;
	cursor: pointer;
	font-weight: 700;
}
.container-fluid {
	z-index: 1100;
}
.detailbox {
	position: relative;
	top: 25%;
	font-family: "Poppins";
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;
	height: auto;
	border-radius: 5px;
	background-color: #dddddd9c;
	backdrop-filter: blur(10px);
	margin: 20px;
}
h3 {
	text-transform: uppercase;
	color: rgb(2, 49, 110);
}
</style>

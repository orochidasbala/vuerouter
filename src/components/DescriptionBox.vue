<template>
	<ul>
		<li class="list">
			<i class="bi bi-bank2"></i>
			<span class="name" @click="showbox = !showbox">
				{{ method.method }}
			</span>
			<div
				class="container-fluid"
				v-if="showbox"
				@click.self="showbox = false"
			>
				<div class="detailbox p-5">
					<h3>{{ method.method }}</h3>
					<img src="../assets/frame.png" alt="" />
					<h4>{{ method.name }}</h4>
					<h5>+95{{ method.number }}</h5>
					<input
						id="link"
						type="text"
						v-model="link"
						class="form-control"
						@click="copylink"
						readonly
					/>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
import { ref } from "vue";
export default {
	props: ["payment", "contact"],
	setup(props) {
		let showbox = ref(false);
		let method = ref(null);

		if (props.payment) {
			method = props.payment;
		}
		if (props.contact) {
			method = props.contact;
		}

		return { showbox, method };
	}
};
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
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
}
ul {
	padding: 0;
}
li {
	list-style: none;
	line-height: 30px;
	cursor: pointer;
}
.container-fluid {
	z-index: 1100;
}
.detailbox {
	position: relative;
	top: 70px;
	font-family: "Poppins";
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;
	height: auto;
	border-radius: 20px;
	background-color: #dddddd9c;
	backdrop-filter: blur(10px);
	margin: 20px;
}
h3 {
	text-transform: capitalize;
	color: rgb(2, 49, 110);
}
i.bi {
	margin-right: 30px;
	display: inline;
	color: #eee;
}
.name {
	color: #eee;
}
.detailbox img {
	width: 230px;
	margin: 18px 10px;
	border-radius: 13px;
}
.form-control {
	margin-top: 15px;
	font-size: 12px;
}
</style>

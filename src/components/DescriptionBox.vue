<template>
	<ul class="list-group list-group-flush text-start">
		<li class="list-group-item">
			<i class="bi bi-arrow-right-square"></i>
			<span class="text-primary" @click="showcode = !showcode">
				{{ item.type }}
			</span>
			<div
				class="container-fluid"
				v-if="showcode"
				@click.self="showcode = false"
			>
				<div class="detailbox p-5">
					<h3 class="text-primary">{{ item.type }}</h3>
					<img src="../assets/frame.png" alt="" />
					<h5>Name</h5>
					<h4>{{ item.name }}</h4>
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
	props: ["contact", "payment"],

	data() {
		return {
			showcode: false,
			item: "",
			link: ""
		};
	},
	methods: {},
	mounted() {
		if (this.contact) {
			this.item = this.contact;
			this.link = this.contact.link;
		}
		if (this.payment) {
			this.item = this.payment;
			this.link = this.payment.source;
		}
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
	background-color: rgba(70, 70, 70, 0.349);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
}
.list-group-item span {
	margin-left: 20px;
	cursor: pointer;
	font-weight: 700;
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
	background-color: #ddd;
	margin: 20px;
}
h3 {
	text-transform: uppercase;
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

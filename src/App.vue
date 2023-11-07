<template>
	<Navbar />
	<router-view />
	<Footer class="bg-dark" />
	<div class="" v-if="alert"></div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
	data() {
		return {
			alert: true,
			alertbox() {
				window.alert("Hi everyone, it's dangerous thing");
			}
		};
	},
	components: {
		Navbar,
		Footer
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>

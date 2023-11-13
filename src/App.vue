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
		return {};
	},
	components: {
		Navbar,
		Footer
	}
};
</script>

<style>
#app {
	font-family: pyidaungsu;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>

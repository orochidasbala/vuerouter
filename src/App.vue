<template>
	<Navbar />
	<router-view />
	<Footer class="bg-dark" />
	<Search />
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
	font-family: pyidaungsu, Poppins;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>

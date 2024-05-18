<template>
	<Navbar />
	<router-view />
	<Footer />
	<!-- <Search /> -->
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
	background-image: linear-gradient(to top right, #1488cc, #2b32b2);
	font-family: pyidaungsu, Poppins;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
@media print {
	html,
	body {
		display: none; /* hide whole page */
	}
}
</style>

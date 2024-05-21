<template>
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container-fluid">
			<img src="../assets/logo.png" />
			<router-link to="/" class="navbar-brand">DS TNI </router-link>

			<!-- search toggler -->
			<input
				type="text"
				placeholder="search here"
				class="searchbar"
				v-model="searchkey"
				@keyup.enter="enter"
			/>
			<!-- search toggler -->

			<!-- menu toggler -->
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon text-light"></span>
			</button>
			<!-- menu toggler -->

			<!-- nav list -->
			<div
				class="collapse navbar-collapse justify-content-end"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav mx-5">
					<li class="nav-item mx-3">
						<router-link to="/" class="active" aria-current="page">
							Home
						</router-link>
					</li>
					<li class="nav-item mx-3">
						<router-link :to="{ name: 'News' }"> News </router-link>
					</li>
					<li class="nav-item mx-3">
						<router-link :to="{ name: 'Donate' }">
							Donate
						</router-link>
					</li>
					<li class="nav-item mx-3">
						<router-link :to="{ name: 'About' }">
							About
						</router-link>
					</li>
				</ul>
				<input
					type="text"
					placeholder="search here"
					class="searchbar"
					v-model="searchkey"
					@keyup.enter="enter"
				/>
			</div>
			<!-- nav list -->
		</div>
	</nav>
</template>

<script>
import { computed, ref } from "vue";
import router from "@/router";
export default {
	setup() {
		let showmenu = () => {
			document.querySelector(".menulist").classList.toggle("active");
		};
		let showsearch = () => {
			document.querySelector(".mainsearchbox").style.display = "block";
		};
		let hidesearchbox = () => {
			document.querySelector(".mainsearchbox").style.display = "none";
		};

		// data searching

		let searchkey = ref("");

		let enter = () => {
			router.push({
				name: "Search",
				params: { result: searchkey.value }
			});
			hidesearchbox();
			searchkey.value = "";
		};

		return {
			showmenu,
			showsearch,
			hidesearchbox,
			searchkey,
			enter
		};
	}
};
</script>

<style scoped>
.navbar {
	position: sticky;
	top: 0;
	backdrop-filter: blur(50px);
	height: 90px;
	z-index: 100;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	box-shadow: 0 0 3px #fff;
	text-shadow: 0 0 2px #fff, 0 0 4px #2b32b2;
}
.navbar .container-fluid {
	max-width: 1700px;
	font-family: poppins;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.container-fluid img {
	width: 70px;
	height: 60px;
	line-height: 60px;
}
.container-fluid a {
	font-size: 1.6em;
	font-weight: 600;
	letter-spacing: 2px;
	margin-left: 15px;
}

.collapse .navbar-nav .nav-item a {
	color: #fff;
	text-decoration: none;
	font-size: 1.2em;
	text-transform: uppercase;
	transition: 0.5s;
}
.collapse .navbar-nav .nav-item a:hover {
	color: orange;
}
.container-fluid > .searchbar {
	display: none;
}
.container-fluid .searchbar {
	border: none;
	border-radius: 10px;
	background-color: #ffffffb2;
	color: #555;
	padding: 10px 15px;
	outline: none;
	width: 20%;
}

.container-fluid .searchbtn:hover {
	scale: 1.05;
}
.navbar-collapse {
	transition: 0.5s;
}
@media (max-width: 991px) {
	.navbar-collapse {
		text-align: center;
		margin: 30px 0;
		padding: 20px;
		background-color: #ffffff6c;
		backdrop-filter: blur(50px);
		border-radius: 20px;
	}
	.collapse .navbar-nav .nav-item {
		padding: 20px;
		margin: 5px;
		background-color: #ffffff6c;
		color: #000;
		border-radius: 15px;
	}
	.collapse .navbar-nav .nav-item a {
		color: #000;
	}
	.navbar-toggler {
		width: auto;
		outline-color: #fff;
	}
	.container-fluid .searchbar {
		width: auto;
		text-align: center;
	}
}
@media (max-width: 720px) {
	.collapse .navbar-nav .nav-item {
		padding: 10px 0;
	}
	.collapse .navbar-nav .nav-item a {
		font-size: 1em;
	}
	.container-fluid .searchbar {
		width: 80%;
		margin: 20px;
	}
}
</style>

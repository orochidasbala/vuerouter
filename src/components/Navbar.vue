<template>
	<div v-if="shoWarning">
		<Warning @close="shoWarning = false" />
	</div>
	<div class="logotitle p-3 bg-dark">
		<img src="../assets/dsLogo.png" alt="Logo" class="logo-img m-2" />
		<h4 class="text-secondary">DRAGONSQUAD-TNI</h4>
		<div class="d-flex">
			<i class="bi bi-airplane-engines text-secondary fs-6 mx-3"></i>
			<span class="catagory text-light">UAV FORCE</span>
			<i class="bi bi-airplane-engines text-secondary fs-6 mx-3"></i>
		</div>
	</div>
	<nav
		class="custom-font navbar navbar-expand-lg bg-body-tertiary sticky-top"
		data-bs-theme="light"
	>
		<div class="container-fluid">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="bi bi-list"></i>
			</button>
			<span class="teamname fs-5 text-primary"
				><span class="fs-5 text-dark">Dragon</span>Squad</span
			>
			<button
				v-if="alert"
				class="text-light bg-warning btn mx-3"
				@click="shoWarning = true"
			>
				Warning
			</button>
			<button
				class="navbar-toggler p-1"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#searchBar"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="bi bi-search"></i>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
					<hr />
					<li class="nav-item">
						<router-link
							class="nav-link"
							aria-current="page"
							:to="{ name: 'Home' }"
						>
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'News' }">
							News
						</router-link>
					</li>

					<li class="nav-item">
						<router-link :to="{ name: 'Contact' }" class="nav-link">
							Contact
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'Donate' }" class="nav-link">
							Donate
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'About' }" class="nav-link">
							About
						</router-link>
					</li>
				</ul>
			</div>
			<form
				class="collapse navbar-collapse d-sm-none d-md-none classes"
				role="search"
			>
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					v-model="search"
				/>
				<p></p>
			</form>
		</div>

		<div class="collapse d-lg-none" id="searchBar">
			<form class="d-flex navbar-collapse m-3" role="search">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					v-model="search"
				/>
			</form>
		</div>
	</nav>
	<div v-if="search" class="searchresult m-1">
		<ul
			v-for="result in searchposts"
			:key="result.id"
			class="list-group d-flex justify-content-center text-bg-secondary"
		>
			<li class="result list-item m-2">{{ result.title }}</li>
		</ul>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import Warning from "./Warning.vue";
import AllPosts from "@/composables/AllPosts";
export default {
	components: { Warning },
	setup() {
		let alert = ref(true);
		let shoWarning = ref(false);
		let search = ref("");
		let postsapi = ref("http://localhost:3000/posts/");

		let { posts, catagories, load, error } = AllPosts();

		load(postsapi.value, posts);

		let searchposts = ref(
			computed(() => {
				return posts.value.filter((sp) => {
					return sp.title.includes(search.value);
				});
			})
		);
		return { alert, shoWarning, search, searchposts };
	}
};
</script>

<style scoped>
/* logo */
.searchresult {
	border-radius: 30px;
}
.logotitle {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: #183d3d; */
}
h4 {
	font-family: "Poppins";
	font-weight: 500;
	letter-spacing: 5px;
}
.catagory {
	font-family: "Poppins";
	font-weight: 700;
	font-size: 0.9em;
}
.logo-img {
	width: 100px;
	height: 100px;
	border-radius: 50%;
}
.result {
	list-style: none;
	cursor: pointer;
}
.custom-font {
	font-family: "Poppins";
	box-shadow: 0px -5px 10px #04364a;
}
.teamname {
	font-weight: 500;
}
.navtitle {
	color: rgb(20, 206, 159);
}
.navtitle:hover {
	color: rgb(10, 151, 116);
}
.navtitle:focus {
	color: rgb(211, 81, 107);
}
button {
	border: none;
	border-radius: 30px;
	padding: 8px 20px;
}
</style>

<template>
	<div class="container-fluid row">
		<div class="col-2 bg-dark">
			<div class="d-flex flex-column justify-content-center">
				<h3 class="text-light text-center my-4">Admin Dashboard</h3>
				<nav class="nav d-flex flex-column m-3 text-start">
					<li
						class="nav-link bg-light m-2"
						@click="togglepage = true"
						:class="{ active: togglepage === true }"
					>
						All Posts
					</li>
					<li
						class="nav-link bg-light m-2"
						@click="togglepage = false"
						:class="{ active: togglepage === false }"
					>
						Create new posts
					</li>
				</nav>
				<button class="btn text-light m-2 p-2">Logout</button>
			</div>
		</div>
		<div class="col-10">
			<div v-if="togglepage">
				<AllPosts />
			</div>
			<div v-if="!togglepage">
				<Create />
			</div>
		</div>
	</div>
</template>

<script>
import AllPosts from "@/components/Admin/AllPosts";
import Create from "@/components/Admin/AddPost.vue";
export default {
	data() {
		return {
			togglepage: true
		};
	},
	components: {
		AllPosts,
		Create
	}
};
</script>

<style scoped>
.container-fluid {
	font-family: "Poppins";
	height: 100vh;
}
.nav-link,
button {
	border-radius: 8px;
	color: rgb(49, 49, 49);
	cursor: pointer;
	padding: 10px;
}
a {
	text-decoration: none;
}
.active {
	color: rgb(1, 118, 172);
}
</style>

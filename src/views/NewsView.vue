<template>
	<div class="container">
		<nav>
			<li>All</li>
			<select name="force">
				<option>Choose Catagories...</option>
				<option value="mission">Mission</option>
				<option value="training">Training</option>
				<option value="announ">Announcement</option>
				<option value="campaign">Campaign</option>
				<option value="other">Other</option>
			</select>
		</nav>

		<!-- <div v-if="paginationPage.length > 0">
			<div class="card" v-for="post in paginationPage" :key="post.id">
				<div class="card-header">
					<router-link
						:to="{ name: 'Read', params: { id: post.id } }"
					>
						<img
							src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
							alt="rover"
						/>
					</router-link>
				</div>
				<div class="card-body">
					<div>
						<span class="tag">
							{{ post.catagory }}
						</span>
						<small>{{ new Date(post.time.seconds * 1000) }}</small>
					</div>
					<div class="title">
						<router-link
							:to="{ name: 'Read', params: { id: post.id } }"
						>
							{{ post.title }}
						</router-link>
					</div>
					<p>
						{{ post.contents.substring(0, 60) }}

						<router-link
							class="card-title text-dark my-3"
							:to="{ name: 'Read', params: { id: post.id } }"
							style="text-decoration: none; color: inherit"
						>
							<span class="text-primary">Read more...</span>
						</router-link>
					</p>
					<div class="writer">
						<img src="../assets/dsLogo.png" />
						<span>DS UAV Force - TNI</span>
					</div>
				</div>
			</div>
		</div> -->
		<div>
			<Spinner />
		</div>
	</div>
	<div class="pagination">
		<div class="btngp">
			<button
				v-for="page in pages"
				:key="page"
				:class="{ active: page === currentPage }"
				@click="changePage(page)"
			>
				{{ page }}
			</button>
		</div>
	</div>
</template>

<script>
import GetPosts from "@/composables/GetPosts";
import { computed, ref } from "vue";
import router from "@/router";
import Spinner from "@/components/Spinner.vue";
import MemberForm from "@/components/MemberForm.vue";

export default {
	components: { Spinner, MemberForm },
	setup() {
		let { allposts, load, error } = GetPosts();
		load();

		// ///////////////////////////////////////////////

		const currentPage = ref(1);
		const perPage = ref(6);
		const totalPages = computed(() =>
			Math.ceil(allposts.value.length / perPage.value)
		);
		const paginationPage = computed(() =>
			allposts.value.slice(
				(currentPage.value - 1) * perPage.value,
				currentPage.value * perPage.value
			)
		);
		const pages = computed(() => {
			const range = 5;
			const start = Math.max(
				1,
				currentPage.value - Math.floor(range / 2)
			);
			const end = Math.min(totalPages.value, start + range - 1);
			return Array.from({ length: end - start + 1 }, (_, i) => i + start);
		});
		const changePage = (pageNum) => {
			currentPage.value = pageNum;
		};

		const previous = () => {
			router.go(-1);
		};
		return {
			allposts,
			currentPage,
			perPage,
			totalPages,
			paginationPage,
			pages,
			changePage,
			previous
		};
	}
};
</script>

<style scoped>
/* dropdown */

.container {
	width: 100%;
	height: 70vh;
	transition: 0.3s ease;
	font-family: "Poppins";
	color: #fff;
}
.container > nav {
	margin: 10px;
	text-align: center;
}
.container > nav > li {
	font-size: 1.1em;
	display: inline;
	list-style: none;
	color: #000;
	font-weight: 600;
	padding: 10px 20px;
	margin: 0 5px;
	text-align: center;
	background-color: #fff;
	border-radius: 10px;
}
.container > nav select {
	max-width: 250px;
	font-size: 1.1em;
	font-family: "Poppins";
	font-weight: 600;
	padding: 10px 10px;
	margin: 10px 5px;
	text-align: center;
	background-color: #fff;
	border-radius: 10px;
	border: none;
}

.container > div {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.card {
	margin: 10px auto;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
	width: 350px;
}
.card-header img {
	cursor: pointer;
	width: 100%;
	margin: 0;
	height: auto;
	border-radius: 10px;
}
.card-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 20px;
	min-height: 250px;
}

.tag {
	background-color: rgb(0, 27, 63);
	border-radius: 5px;
	font-size: 16px;
	margin-right: 2px;
	padding: 5px 10px;
	text-transform: capitalize;
	cursor: pointer;
	color: #fff;
}

.card-body .title a {
	font-size: 1.4em;
	text-decoration: none;
	margin: 15px 0 15px;
	cursor: pointer;
}
.card-body p {
	font-family: Poppins;
	font-size: 0.9em;
	margin: 0 0 20px;
	text-align: justify;
}
.card-body .writer {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.writer img {
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin-right: 10px;
}
.writer > span {
	font-size: 1.2em;
	margin-top: 10px;
	font-weight: 600;
	letter-spacing: 3px;
	text-transform: uppercase;
}

/* paganition */
.pagination {
	font-size: 15px;
}
.pagination .btngp {
	margin: 10px auto;
}
.pagination .btngp button {
	color: #fff;
	padding: 2px 1px;
	margin: 1px;
	background-color: transparent;
	border: none;
	border-bottom: 2px solid #fff;
	text-align: center;
}
.pagination .btngp button {
	width: 60px;
}
.pagination .btngp .forward,
.backward {
	width: 100px;
}
.pagination .btngp .backward {
	width: 100px;
}

@media (max-width: 1200px) {
	.container {
		width: 900px;
	}
	.card {
		width: 350px;
	}
}
@media (max-width: 720px) {
	.container > nav {
		margin: 40px 0;
		text-align: left;
	}
	.container {
		width: 90%;
	}
	.card {
		width: 350px;
	}
}
@media (max-width: 576px) {
	.container > nav > li {
		margin: 0px;
		margin-right: 5px;
		text-align: left;
	}
}
</style>

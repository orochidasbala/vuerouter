<template>
	<div class="container-fluid py-4">
		<!-- main contents section -->
		<h3 class="heading fs-4 text-center">All News</h3>

		<div class="contents row p-2">
			<div
				class="card col-sm-12 col-md-6 col-lg-4"
				v-for="post in paginationPage"
				:key="post.id"
			>
				<div class="imageframe">
					<img src="../assets/max.png" alt="" />
				</div>
				<div class="card-body align-item-start text-start">
					<router-link
						class="card-title text-light my-3"
						:to="{ name: 'Read', params: { id: post.id } }"
						style="text-decoration: none; color: inherit"
					>
						<div class="fs-5">
							<strong>{{ post.title }}</strong>

							<!-- <strong>{{ post.author }}</strong> -->
						</div>
					</router-link>
					<div class="d-flex justify-content-between text-light my-2">
						<small class="date">3 days ago</small>
						<div>
							<div
								class="catpill"
								v-for="tag in post.tags"
								:key="tag"
							>
								<router-link
									:to="{ name: 'Tag', params: { tag: tag } }"
								>
									{{ tag }}
								</router-link>
							</div>
						</div>
					</div>
					<p class="card-text my-3">
						{{ post.content.substring(0, 60) }}

						<router-link
							class="card-title text-dark my-3"
							:to="{ name: 'Read', params: { id: post.id } }"
							style="text-decoration: none; color: inherit"
						>
							<span>Read more...</span>
						</router-link>
					</p>
				</div>
			</div>
			<div class="pagination">
				<div class="btngp">
					<!-- <button class="backward" @click="previous">Previous</button> -->
					<button
						v-for="page in pages"
						:key="page"
						:class="{ active: page === currentPage }"
						@click="changePage(page)"
					>
						{{ page }}
					</button>
					<!-- <button class="forward" @click="page + 1">Next</button> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AllPosts from "@/composables/AllPosts";
import { computed, onMounted, ref } from "vue";
import router from "@/router";

export default {
	setup() {
		const posts = ref([]);
		const error = ref(null);
		const currentPage = ref(1);
		const perPage = ref(6);
		const totalPages = computed(() =>
			Math.ceil(posts.value.length / perPage.value)
		);
		const paginationPage = computed(() =>
			posts.value.slice(
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
		onMounted(() => {
			async function load() {
				try {
					let res = await fetch("http://localhost:3000/posts/");
					if (res.status === 404) {
						throw new Error("not found url");
					}
					let datas = await res.json();
					posts.value = datas;
				} catch (err) {
					error.value = err;
				}
			}
			load();
		});

		const previous = () => {
			router.go(-1);
		};
		return {
			posts,
			error,
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
.container-fluid {
	max-width: 80%;
	/* padding: 20px; */
}
.container-fluid .heading {
	font-family: poppins;
}
.container-fluid .contents {
	display: flex;
	justify-content: center;
}
.container-fluid .contents .card {
	margin-bottom: 20px;
	border: none;
	width: 400px;
}
.container-fluid .contents .card .imageframe {
	width: 100%;
	height: 135px;
}
.container-fluid .contents .card .imageframe img {
	width: 100%;
	height: auto;
	cursor: pointer;
	margin: 5px auto;
	border-radius: 5px;
}
@media screen and (max-width: 800px) {
	img {
		width: 97%;
	}
}
.contents .card .card-body {
	width: 100%;
	background-color: #00000021;
	backdrop-filter: blur(5px);
	margin: 5px auto;
	box-shadow: 0 -5px 20px #00000021;
}
.contents .card .card-body .card-title {
	color: rgb(255, 255, 255);
	text-decoration: none;
}
.contents .card .card-body .card-text {
	font-size: 17px;
	text-align: justify;
}
.card .catpill {
	display: inline;
	margin-left: 5px;
	padding: 3px 18px;
	border-radius: 15px;
	background-color: rgb(0, 27, 63);
	cursor: pointer;
}
.card .catpill a {
	text-decoration: none;
	color: #fff;
}
.card .date {
	white-space: nowrap;
}

.card .card-text .card-title span {
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	color: rgb(52, 104, 153);
}

/* paganition */
.pagination {
	font-family: poppins;
	font-size: 15px;
}
.pagination .btngp {
	margin: 10px auto;
}
.pagination .btngp button {
	padding: 5px 20px;
	margin: 1px;
	background-color: transparent;
	border: 1px solid #666;
	border-radius: 10px;
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
</style>

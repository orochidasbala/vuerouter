<template>
	<div class="container">
		<h1>All Posts</h1>
		<div v-if="paginationPage.length > 0">
			<div class="card" v-for="post in paginationPage" :key="post.id">
				<div class="card-header">
					<img
						src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
						alt="rover"
					/>
				</div>
				<div class="card-body">
					<div class="tagrow">
						<span
							class="tag tag-purple"
							v-for="tag in post.tags"
							:key="tag"
							><router-link
								:to="{ name: 'Tag', params: { tag: tag } }"
							>
								{{ tag }}
							</router-link></span
						>
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
							<span>Read more...</span>
						</router-link>
					</p>
					<div class="user">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.M0T2lrei9DX8tcf5uNDeZwHaHa%26pid%3DApi&f=1&ipt=c4c17d2be9d2340c12fdadfa2032f5cd211193d68120404305e7573e265a7923&ipo=images"
							alt="user"
						/>
						<div class="user-info">
							<h5>{{ post.author }}</h5>
							<small>{{ post.time }}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
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
import { computed, onMounted, ref } from "vue";
import router from "@/router";
import Spinner from "@/components/Spinner.vue";

export default {
	components: { Spinner },
	setup() {
		const { allposts, load, error } = GetPosts();
		load();
		console.log(allposts.value, "console datas");
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
		onMounted(() => {});

		const previous = () => {
			router.go(-1);
		};
		return {
			allposts,
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
.container {
	width: 1400px;
	transition: 0.3s ease;
}
.container > h1 {
	font-size: 2em;
	font-family: "Poppins";
	font-weight: 600;
	padding: 20px;
	text-align: center;
}
.container > div {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
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
	width: 100%;
	margin: 0;
	height: 200px;
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
.card-body .tagrow {
	display: flex;
	flex-direction: row;
}
.tag {
	background: #cccccc;
	border-radius: 10px;
	font-size: 16px;
	margin-right: 2px;
	padding: 4px 8px;
	text-transform: capitalize;
	cursor: pointer;
}
.tag a {
	text-decoration: none;
	color: #fff;
}
.tag-purple {
	background-color: rgb(0, 27, 63);
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
.user {
	display: flex;
	margin-top: auto;
}

.user img {
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin-right: 10px;
}
.user-info h5 {
	margin: 0;
}
.user-info small {
	color: #545d7a;
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
	padding: 2px 1px;
	margin: 1px;
	background-color: transparent;
	border: none;
	border-bottom: 2px solid rgb(0, 27, 63);
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

@media (max-width: 990px) {
	.card {
		width: 100%;
	}
}
@media (max-width: 580px) {
	.container {
		max-width: 100%;
	}
	.card {
		max-width: 90%;
	}
}
</style>

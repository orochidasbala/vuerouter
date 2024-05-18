<template>
	<div class="container-fluid py-4">
		<!-- main contents section -->
		<h3 class="heading text-light text-center">Search Result</h3>

		<div class="contents row p-2" v-if="searchresult.length > 0">
			<div
				v-for="post in searchresult"
				:key="post.id"
				class="card col-sm-12 col-md-6 col-lg-4"
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
									:to="{
										name: 'Tag',
										params: { tag: tag }
									}"
								>
									{{ tag }}
								</router-link>
							</div>
						</div>
					</div>
					<p class="card-text my-3">
						{{ post.contents.substring(0, 80) }}

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
		</div>
		<div v-else class="spinner">
			<Spinner />
		</div>
	</div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import Sidebar from "@/components/Sidebar.vue";
import Spinner from "@/components/Spinner.vue";
import GetPosts from "@/composables/GetPosts";
import { computed } from "vue";

export default {
	components: {
		SinglePost,
		Spinner,
		Sidebar
	},
	props: ["result"],
	setup(props) {
		let { allposts, load, error } = GetPosts();
		load();
		// function equalsIgnoringCase(text, other) {
		// 	return (
		// 		text.localeCompare(other, undefined, {
		// 			sensitivity: "base"
		// 		}) === 0
		// 	);
		// }

		let searchresult = computed(() => {
			return allposts.value.filter((p) => {
				let title = p.title.toLowerCase();
				let search = props.result.toLowerCase();
				return title.includes(search);
			});
		});

		return { searchresult };
	}
};
</script>

<style scoped>
.container-fluid {
	max-width: 100%;
}
.container-fluid .heading {
	font-family: poppins;
}
.container-fluid .contents {
	display: flex;
	justify-content: center;
}
.spinner {
	position: relative;
	top: 150px;
	font-family: poppins;
	font-size: 1.25em;
	color: rgb(177, 177, 177);
	width: 50%;
	height: 35vh;
	margin: auto;
	text-align: center;
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
</style>

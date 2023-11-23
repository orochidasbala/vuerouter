<template>
	<div class="container-fluid py-4">
		<!-- main contents section -->

		<div class="contents row p-2">
			<div
				class="card col-sm-12 col-md-6 col-lg-3"
				v-for="post in limit"
				:key="post.id"
			>
				<div class="imageframe">
					<router-link
						class="card-title my-3"
						:to="{ name: 'Read', params: { id: post.id } }"
					>
						<img
							class="align-item-center justify-content-center"
							src="../assets/max.png"
							alt=""
						/>
					</router-link>
				</div>
				<div class="card-body">
					<router-link
						class="card-title my-3"
						:to="{ name: 'Read', params: { id: post.id } }"
					>
						<div class="fs-5">
							<strong>{{ post.title }}</strong>
						</div>
					</router-link>
					<div class="d-flex justify-content-between text-light my-2">
						<small class="date">3 days ago</small>
						<div>
							<div
								class="catpill text-light"
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
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import AllPosts from "@/composables/AllPosts";
export default {
	props: ["tag"],
	setup(props) {
		let { allposts, load, error } = AllPosts();
		load();

		let relatedpost = computed(() => {
			return allposts.value.filter((post) => {
				return post.tags.includes(props.tag);
			});
		});
		let limit = computed(() => {
			return relatedpost.value.slice(0, 4);
		});
		return { limit };
	}
};
</script>

<style scoped>
.container-fluid {
	max-width: 100%;
}

.container-fluid .contents {
	display: flex;
	justify-content: center;
}
.container-fluid .contents .card {
	border: none;
	width: 400px;
	margin: 10px;
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

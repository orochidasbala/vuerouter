<template>
	<div class="container-fluid py-4">
		<!-- main contents section -->
		<h3 class="heading fs-4 text-center">{{ tag }} posts</h3>

		<div class="contents row p-2">
			<div
				class="card col-sm-12 col-md-6 col-lg-4"
				v-for="post in filtertag"
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
		</div>
	</div>

	<!-- <nav aria-label="Page navigation example">
					<ul class="pagination justify-content-center">
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav> -->
</template>

<script>
import AllPosts from "@/composables/AllPosts";
import { computed, ref } from "vue";

export default {
	props: ["tag"],
	setup(props) {
		let { allposts, load, error } = AllPosts();
		load();
		let filtertag = computed(() => {
			return allposts.value.filter((post) => {
				return String(post.tags).includes(props.tag);
			});
		});

		return { allposts, error, filtertag };
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
.container-fluid .contents .card {
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

<template>
	<div class="container p-3">
		<div class="row">
			<!-- main contents section -->
			<div
				class="col-sm-12 col-md-12 col-lg-8 p-4 justify-content-center"
			>
				<h3 class="hd fs-4 text-center">All News</h3>

				<div class="row my-4 gap-2 justify-content-center">
					<div
						class="card col-sm-11 col-md-5 col-lg-5 align-item-start justify-content-center"
						v-for="post in allposts"
						:key="post.id"
					>
						<div class="">
							<img
								class="align-item-center justify-content-center"
								src="../assets/max.png"
								alt=""
							/>
						</div>
						<div class="card-body align-item-start text-start">
							<!-- <div v-for="tag in tags" :key="tag">
								<span>{{ tags }}</span>
							</div> -->
							<router-link
								class="card-title text-dark my-3"
								:to="{ name: 'Read', params: { id: post.id } }"
								style="text-decoration: none; color: inherit"
							>
								<span
									class="fs-5 d-flex justify-content-between"
								>
									<strong class="my-2">{{
										post.title
									}}</strong>
									<small>3 days ago</small>
									<!-- <strong>{{ post.author }}</strong> -->
								</span>
							</router-link>
							<p class="card-text">
								{{ post.content.substring(0, 120) }}
							</p>
							<div class="d-flex w-100 justify-content-between">
								<span>Read more...</span>
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
			</div>

			<!-- category section -->
			<Sidebar :posts="allposts" />
		</div>
	</div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import Sidebar from "@/components/Sidebar.vue";
import AllPosts from "@/composables/AllPosts";

export default {
	components: {
		SinglePost,
		Sidebar
	},
	setup() {
		let { allposts, load, error } = AllPosts();
		load();
		let posts = allposts.value.forEach((post) => {
			console.log(post);
		});
		// let tags = allposts.value.filter((tag) => {
		// 	return tag.tags;
		// });

		// console.log(tags);

		return { allposts, load, error };
	}
};
</script>

<style scoped>
.container {
	max-width: 1600px;
}
.card {
	border: none;
}
img {
	width: 95%;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-self: center;
	margin: 10px 10px;
	border-radius: 15px;
}
@media screen and (max-width: 800px) {
	img {
		width: 95%;
	}
}
.hd {
	font-family: "Poppins";
	font-weight: 500;
}
.card-text {
	text-align: justify;
}
span {
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	color: rgb(52, 104, 153);
}
</style>

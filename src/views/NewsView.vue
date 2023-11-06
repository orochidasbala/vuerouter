<template>
	<div class="container p-3">
		<div class="row">
			<!-- main contents section -->
			<div class="col-sm-12 col-md-12 col-lg-8 my-2">
				<span class="text-dark fs-4">Lastest articals</span>

				<div class="row my-5">
					<div
						class="col-sm-11 col-md-5 col-lg-5 m-3 align-item-center justify-content-center"
						v-for="post in allposts"
						:key="post.id"
					>
						<div class="">
							<img
								class="align-item-center justify-content-center"
								src="../assets/logo.png"
								alt=""
							/>
						</div>
						<div class="card-body align-item-start text-start">
							<span class="text-success">Catagory</span>

							<router-link
								:to="{ name: 'Read', params: { id: post.id } }"
								style="text-decoration: none; color: inherit"
							>
								<h5 class="card-title text-dark my-3">
									<strong>{{ post.title }}</strong>
								</h5>
							</router-link>
							<p class="card-text">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Fugit autem dolorem
								consectetur eligendi cupiditate! Alias facere,
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Odit, consectetur facere nam
								placeat deleniti quo numquam laudantium
								voluptates animi. Cum.
							</p>
							<div class="d-flex w-100 justify-content-between">
								<span>Read more...</span>
								<small>3 days ago</small>
							</div>
						</div>
					</div>
				</div>
				<nav aria-label="Page navigation example">
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
				</nav>
			</div>

			<!-- category section -->
			<Sidebar />
		</div>
	</div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
	data() {
		return {
			allposts: []
		};
	},
	components: {
		SinglePost,
		Sidebar
	},
	mounted() {
		fetch("http://localhost:3000/posts")
			.then((response) => {
				return response.json();
			})
			.then((datas) => {
				this.allposts = datas;
			})
			.catch((err) => {});
	}
};
</script>

<style>
.container {
	max-width: 1500px;
}
span {
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
}
</style>

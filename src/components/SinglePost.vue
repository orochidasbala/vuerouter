<template>
	<div
		class="card d-flex flex-lg-row flex-md-row flex-sm-coloum gap-3 justify-content-between align-items-start my-4 p-3"
		v-for="post in posts"
		:key="post.id"
	>
		<div class="">
			<img
				class="align-item-center justify-content-center w-sm-100 w-md-50 w-lg-25"
				src="../assets/logo.png"
				alt=""
			/>
		</div>
		<div class="card-body align-item-start text-start">
			<router-link :to="{ name: 'Read', params: { id: post.id } }">
				<h5 class="card-title" style="text-decoration: none">
					{{ post.title }}
				</h5>
			</router-link>
			<p class="card-text">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
				autem dolorem consectetur eligendi cupiditate! Alias facere,
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
				consectetur facere nam placeat deleniti quo numquam laudantium
				voluptates animi. Cum.
			</p>
			<div class="d-flex w-100 justify-content-between">
				<span>Read more...</span>
				<small>3 days ago</small>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: []
		};
	},
	mounted() {
		fetch("http://localhost:3000/posts")
			.then((response) => {
				return response.json();
			})
			.then((datas) => {
				this.posts = datas;
			})
			.catch((err) => {
				console.log();
			});
	}
};
</script>

<style scoped>
img {
	cursor: pointer;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 3px;
}
span {
	cursor: pointer;
	font-size: 14px;
	color: rgb(11, 118, 218);
}
</style>

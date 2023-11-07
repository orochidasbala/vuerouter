<template>
	<div class="container p-3" v-if="post">
		<div class="row">
			<div class="col my-2">
				<span class="text-primary fs-4 titles">{{ post.title }}</span>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Accusamus nemlorjo consequuntur pariatur optio!
					Necessitatibus molestiae quisquam in. Beatae reprehenderit
					vero ex Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Qui, blanditiis corporis quisquam porro voluptatum
					enim id voluptas a molestiae recusandae deserunt aut cum,
					non natus aliquam perferendis adipisci dolores nemo.
				</p>
				<p>Author name : {{ post.author }}</p>
				<nav aria-label="Page navigation example">
					<ul class="pagination d-flex justify-content-between">
						<li class="page-item">
							<button class="page-link" aria-label="Previous">
								<span aria-hidden="true">&laquo; previous</span>
							</button>
						</li>

						<li class="page-item">
							<button class="page-link" aria-label="Next">
								<span aria-hidden="true">next &raquo;</span>
							</button>
						</li>
					</ul>
				</nav>
				<hr />
			</div>
		</div>

		<div class="justify-contents-start">
			<span class="text-primary fs-4">3 Related Posts</span>
			<RelatedNews />
		</div>
	</div>
</template>

<script>
import RelatedNews from "../components/RelatedNews.vue";

export default {
	props: ["id"],
	data() {
		return {
			post: null
		};
	},
	components: {
		RelatedNews
	},
	mounted() {
		fetch("http://localhost:3000/posts/" + this.id)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.post = data;
			})
			.catch((err) => {
				console.log(err.message());
			});
	}
};
</script>

<style scoped>
.newtitle {
	color: rgb(20, 157, 220);
}
button {
	border: none;
}
span {
	color: rgb(47, 111, 136);
}
</style>

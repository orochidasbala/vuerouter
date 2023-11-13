<template>
	<div class="container p-3">
		<div class="row">
			<div class="col my-2" v-if="post">
				<h3 class="text-primary fs-4 titles">{{ post.title }}</h3>
				<p>{{ post.content }}</p>
				<img src="../assets/max.png" alt="image" />
				<p class="my-3">Post by {{ post.author }}</p>
				<nav aria-label="Page navigation example">
					<ul class="pagination d-flex justify-content-between">
						<li class="page-item">
							<button class="page-link" aria-label="Previous">
								<span aria-hidden="true" id="backward"
									>&laquo; previous</span
								>
							</button>
						</li>

						<li class="page-item">
							<router-link
								:to="{
									name: 'Read',
									params: { id: post.id }
								}"
							>
								<button class="page-link" aria-label="Next">
									<span aria-hidden="true">next &raquo;</span>
								</button>
							</router-link>
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
import { computed, ref } from "vue";
import RelatedNews from "../components/RelatedNews.vue";
import singlePost from "../composables/singlePost";

export default {
	props: ["id"],
	components: {
		RelatedNews
	},
	setup(props) {
		// let id = ref(Number(props.id));
		let { post, load, error } = singlePost(props.id);
		load();

		// use index number of all posts array

		return { post, load, error };
	}
};
</script>

<style scoped>
.titles {
	margin: 30px;
}
.newtitle {
	color: rgb(20, 157, 220);
}
img {
	width: 98%;
	border-radius: 20px;
}
button {
	border: none;
}
span {
	color: rgb(47, 111, 136);
}
</style>

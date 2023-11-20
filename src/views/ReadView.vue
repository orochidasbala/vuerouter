<template>
	<div class="container row">
		<div class="col my-2" v-if="post">
			<div class="titlelayout">
				<h3 class="fs-4 titles">
					{{ post.title }}
				</h3>
				<span>3 days ago</span>
			</div>
			<p class="postcontent">{{ post.content }}</p>
			<div class="imgframe">
				<img src="../assets/xray.jpg" alt="image" />
			</div>
			<p class="text-center my-5">Post by "{{ post.author }}"</p>
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
		</div>
		<Sidebar />
	</div>
	<hr />

	<div class="relatedposts">
		<span>Related Posts</span>
		<div v-for="tag in post.tags" :key="tag">
			<RelatedNews :tag="tag" />
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import RelatedNews from "../components/RelatedNews.vue";
import singlePost from "../composables/singlePost";
import Sidebar from "@/components/Sidebar.vue";

export default {
	props: ["id"],
	components: {
		RelatedNews,
		Sidebar
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
.container {
	max-width: 1600px;
	margin: 10px auto;
}
.titlelayout {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 15px;
}
.container .col .titlelayout .titles {
	font-weight: 900;
	color: rgb(0, 27, 63);
}
.container .col .postcontent {
	text-align: start;
	margin: 15px;
	font-size: 18px;
}
.container .col .imgframe {
	max-width: 700px;
	height: auto;
	margin: 50px auto;
}
.container .col .imgframe img {
	width: 100%;
	height: auto;
	box-shadow: 0 0 5px rgb(0, 27, 63);
}
@media screen and (max-width: 1050px) {
	.imgframe {
		width: 700px;
	}
	img {
		width: 100%;
	}
}
@media screen and (max-width: 800px) {
	.imgframe {
		width: 80%;
	}
	img {
		width: 80%;
	}
}

.relatedposts {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.relatedposts span {
	font-family: poppins;
	font-size: 25px;
	font-weight: 500;
	color: rgb(0, 27, 63);
}
</style>

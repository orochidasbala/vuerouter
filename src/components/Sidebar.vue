<template>
	<div class="col-sm-12 col-md-12 col-lg-4 sidebar">
		<!-- <span class="heading">Categories</span>
		<section class="catsection">
			<ul class="ul" v-for="tag in uniquetags" :key="tag">
				<li class="text-light pill">
					<router-link :to="{ name: 'Tag', params: { tag: tag } }">
						tag
					</router-link>
				</li>
			</ul>
		</section> -->
		<section>
			<span class="heading">Latest articals</span>
			<div>
				<ul v-for="post in limit" :key="post.id">
					<li class="posts">
						<router-link
							:to="{ name: 'Read', params: { id: post.id } }"
							@click="readpost"
						>
							{{ post.title }}
						</router-link>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import GetPosts from "@/composables/GetPosts";
import { computed, onMounted, ref } from "vue";

export default {
	props: ["posts"],
	setup(props) {
		let tags = ref([]);
		let { allposts, load, error } = GetPosts();
		load();
		props.posts.forEach((post) => {
			post.tags.forEach((tag) => {
				tags.value.push(tag);
			});
		});
		let uniquetags = tags.value.filter((tag, index, array) => {
			return array.indexOf(tag) === index;
		});
		let limit = computed(() => {
			return allposts.value.slice(0, 4);
		});
		onMounted(() => {
			load();
		});
		return { limit, error, uniquetags };
	}
};
</script>

<style scoped>
.sidebar {
	padding: 13px;
	/* background-color: #eee; */
}
.heading {
	display: block;
	/* margin: 0px 20px 0px 20px; */
	/* border-radius: 5px; */
	font-family: "Poppins";
	font-size: 2em;
	padding: 20px;
	font-weight: 700;
	text-align: left;
	color: rgb(0, 27, 63);
	/* background-color: rgb(0, 27, 63); */
}
.catsection {
	background-color: #eee;
	margin: 5px 20px;
	padding: 20px 10px 5px 10px;
	border-radius: 5px;
	text-align: justify;
}

.ul {
	display: inline-block;
	padding: 0;
	padding-right: 10px;
}
.pill {
	background-color: rgb(0, 27, 63);
	border: none;
	list-style: none;
	padding: 7px 20px;
	margin: 1px;
	cursor: pointer;
	font-size: 18px;
	font-weight: bold;
	border-radius: 20px;
	transition: all 0.03s ease;
}
.pill a {
	text-decoration: none;
	color: #fff;
}
.pill:hover {
	transform: scale(0.95);
	background-color: rgba(0, 27, 63, 0.692);
}
ul {
	padding: 0;
	margin: 10px 20px;
}
ul li {
	list-style: none;
	background-color: rgb(251, 187, 10);
	padding: 15px 25px;
	border-radius: 20px;
}
.posts a {
	color: #fff;
	text-decoration: none;
	font-size: 1.3em;
	font-weight: 800;
	transition: 0.5s;
}
.posts a:hover {
	font-size: 1.35em;
	color: rgb(226, 226, 226);
}
</style>

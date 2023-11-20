<template>
	<div class="col-sm-12 col-md-12 col-lg-4 sidebar text-start">
		<section>
			<span class="heading fs-4 p-3">Categories</span>
			<ul class="" v-for="tag in tags" :key="tag">
				<li class="group-item text-light">
					<button class="pill">{{ tag }}</button>
				</li>
			</ul>
		</section>
		{{ alltags }}
		<section>
			<span class="heading fs-4 p-3">Latest articals</span>
			<div>
				<ul class="m-1" v-for="post in limit" :key="post.id">
					<li class="rltposts">
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
import AllPosts from "@/composables/AllPosts";
import { computed, ref } from "vue";

export default {
	setup() {
		let tags = ref([]);
		let { allposts, load, error } = AllPosts();
		load();
		let limit = computed(() => {
			return allposts.value.slice(0, 4);
		});

		let alltags = computed(() => {
			return allposts.value.forEach((p) => {
				tags.value.push(p.tags);
			});
		});

		console.log(tags.value);
		return { limit, error, alltags };
	}
};
</script>

<style scoped>
.heading {
	display: block;
	margin: 20px;
	border-radius: 5px;
	font-family: "Poppins";
	text-align: center;
	background-color: rgb(0, 27, 63);
	color: white;
}

.pill {
	border: none;
	width: auto;
	list-style: none;
	padding: 5px 20px;
	margin: 2px;
	cursor: pointer;
	font-size: 1em;
	font-weight: bold;
	background-color: orange;
	border-radius: 30px;
	transition: all 0.03s ease;
}
.pill:hover {
	transform: scale(0.95);
}
.rltposts a {
	text-decoration: none;
	color: rgb(31, 36, 32);
	font-weight: 700;
}
</style>

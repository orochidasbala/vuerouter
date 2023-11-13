<template>
	<!-- <SinglePost /> -->
	<h1>{{ similarpost }}</h1>
</template>

<script>
import { computed, ref } from "vue";
import SinglePost from "./SinglePost";
export default {
	// props: ["posts", "readpost"],
	components: {
		SinglePost
	}
	// 	setup(props) {
	// 		let readtitle = ref(props.readpost);

	// 		let similarpost = computed(() => {
	// 			return props.posts.filter((post) => {
	// 				return post.title === readtitle.value;
	// 			});
	// 		});
	// 		console.log(similarpost.value);

	// 		return { similarpost };
	// 	}
};
</script>

<style></style>

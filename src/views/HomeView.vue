<template>
	<div class="container p-3">
		<div class="row">
			<!-- main contents section -->
			<div class="col-sm-12 col-md-12 col-lg-8 my-2">
				<h3 class="hd fs-4 text-center py-3">Lastest articals</h3>
				<div v-for="post in allposts" :key="post.id" class="post">
					<SinglePost :post="post" />
				</div>
			</div>

			<!-- category section -->
			<Sidebar :catagories="catagories" :posts="allposts" />
		</div>
		<div class="content text-center pt-3">
			<span class="hd text-primary fs-4">Developer Details</span>

			<p class="p-4">
				Hi, my name is Gnuak, I'm a web developer and system & network
				administrator. I have always been interested in computers, Linux
				& security. I created this website to share my findings with
				you.
			</p>
		</div>
		<div class="content text-center pt-3">
			<span class="hd text-primary fs-4">Team Description</span>

			<p class="p-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
				nulla consequatur modi quibusdam incidunt omnis sapiente nisi
				quod facilis veniam perferendis, natus assumenda ipsam iure in
				cupiditate provident. Dolores, nemo!
			</p>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

// @ is an alias to /src
import SinglePost from "../components/SinglePost.vue";
import Sidebar from "@/components/Sidebar.vue";

import AllPosts from "../composables/AllPosts";

export default {
	components: {
		SinglePost,
		Sidebar
	},
	setup() {
		let { allposts, load, error } = AllPosts();
		load();
		return { allposts, load, error };
	}
};
</script>

<style>
.hd {
	font-family: "Poppins";
	font-weight: 500;
}
.post {
	margin-top: 25px;
}
.container {
	max-width: 1500px;
}
</style>

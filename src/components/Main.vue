<template>
	<div class="container p-3">
		<div class="row">
			<!-- main contents section -->
			<div class="col-sm-12 col-md-12 col-lg-8 my-2">
				<span class="text-dark fs-4">Lastest articals</span>

				<SinglePost />
			</div>

			<!-- category section -->
			<Sidebar />
		</div>
		<div class="content text-center pt-3">
			<span class="fs-4 text-dark p-4 newtitle">Developer Details</span>
			<p class="p-4">
				Hi, my name is Gnuak, I'm a web developer and system & network
				administrator. I have always been interested in computers, Linux
				& security. I created this website to share my findings with
				you.
			</p>
		</div>
		<div class="content text-center pt-3">
			<span class="fs-4 text-dark p-4 newtitle">Team Description</span>
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
import Sidebar from "./Sidebar.vue";
import SinglePost from "./SinglePost.vue";
export default {
	components: {
		SinglePost,
		Sidebar
	}
};
</script>

<style scoped>
.container {
	max-width: 1600px;
}
</style>

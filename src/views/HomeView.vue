<template>
	<div class="header-content">
		<div class="text-content">
			<div class="name">Dragon Squad - TNI ( UAV Force )</div>
			<div class="force">
				Myeik District,
				<div class="typing-text">
					<span class="">People Defence Force</span>
				</div>
			</div>
			<div class="text">
				Hi, my name is Mr.Gnuak<br />I created this website to share our
				battle news with you.
			</div>
		</div>
	</div>

	<div class="container-fluid p-3">
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-8">
				<h3 class="hd fs-4 py-3">Latest articals</h3>
				<div v-for="post in limit" :key="post.id" class="post">
					<SinglePost :post="post" />
				</div>
			</div>

			<Sidebar :posts="allposts" />
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";

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
		let limit = computed(() => {
			return allposts.value.slice(0, 4);
		});
		return { limit, allposts, error };
	}
};
</script>

<style scoped>
.header-content {
	width: 100%;
	height: 40vh;
	background-color: rgb(0, 27, 63);
	z-index: 100;
}

.header-content .text-content {
	position: absolute;
	top: 18%;
	left: 7%;
	color: #fff;
	font-family: "Poppins";
}
.header-content .text-content .text {
	font-size: 15px;
	margin: 15px 0;
}
.header-content .text-content .name {
	font-size: 35px;
	font-weight: 500;
	margin: 5px 0px 10px -2px;
	text-transform: uppercase;
}
.header-content .text-content .force {
	font-size: 18px;
	text-transform: uppercase;
	font-weight: 500;
}
.header-content .text-content .force .typing-text {
	color: crimson;
	font-size: 28px;
	white-space: nowrap;
	font-weight: 500;
	letter-spacing: 2px;
	overflow: hidden;
	/* border-right: 2px solid rgb(255, 255, 255); */
	animation: typing 2s steps(20);
}
@media (max-width: 500px) {
	.header-content {
		height: 30vh;
	}
	.header-content .text-content .text {
		font-size: 14px;
		margin-right: 20px;
	}
	.header-content .text-content .name {
		font-size: 20px;
		font-weight: 500;
	}
	.header-content .text-content .force {
		font-size: 16px;
	}
	.header-content .text-content .force .typing-text {
		font-size: 18px;
		animation: typing 2s steps(20);
	}
}
@keyframes typing {
	0% {
		width: 0ch;
	}
	50% {
		width: 20ch;
	}
	100% {
		width: 20ch;
	}
}
.container-fluid {
	max-width: 1500px;
}
.container .row {
	width: 100%;
}
img {
	width: 200px;
}
.hd {
	font-family: "Poppins";
	font-weight: 500;
	padding: 20px;
}
@media (max-width: 780px) {
	.hd {
		text-align: center;
	}
}
.post {
	margin: 25px auto;
}
</style>

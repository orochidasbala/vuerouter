<template>
	<div class="header-content">
		<div class="text-content">
			<div class="name">Dragon Squad</div>
			<div class="force">
				<div class="typing-text">
					<span class="">People Defence Force</span>
				</div>
				Tanintharyi Region
			</div>
			<div class="text">
				Hi, my name is Mr.Gnuak<br />I created this website to share our
				battle news with you.
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<div class="recent">
			<h3 class="hd py-3">Recent</h3>
			<div v-if="limit.length > 0">
				<div v-for="post in limit" :key="post.id" class="post">
					<SinglePost :post="post" />
				</div>
			</div>
			<div v v-else class="spin">
				<Spinner />
			</div>
			<button class="allnews">
				<router-link :to="{ name: 'News' }"> see all </router-link>
			</button>
		</div>
		<div class="sb">
			<Sidebar :posts="allposts" />
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";

// @ is an alias to /src
import SinglePost from "../components/SinglePost.vue";
import Sidebar from "@/components/Sidebar.vue";

import GetPosts from "../composables/GetPosts";
import Spinner from "@/components/Spinner.vue";

export default {
	components: {
		SinglePost,
		Sidebar,
		Spinner
	},
	setup() {
		let { allposts, load, error } = GetPosts();
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
	height: auto;
	transition: 0.5s;
}

.header-content .text-content {
	margin: 80px;
	color: #fff;
	font-family: "Poppins";
	padding: 30px;
	transition: 0.5s;
}
.text-content .name {
	font-size: 3.5em;
	font-weight: 500;
	text-transform: uppercase;
	text-shadow: 2px 1px rgb(0, 27, 63), 1px 0px 4px white;
	color: white;
	font-variant: small-caps;
}
.text-content .force {
	font-size: 1em;
	text-transform: uppercase;
	font-weight: 500;
}
.force .typing-text {
	color: orange;
	text-shadow: 2px 2px rgb(0, 27, 63), 2px 2px 2px white;
	font-size: 2em;
	white-space: nowrap;
	font-weight: 600;
	letter-spacing: 5px;
	overflow: hidden;
	animation: typing 2s steps(20);
}
.text-content .text {
	font-size: 1em;
	margin: 20px 0;
}

/* responsive */
@media (max-width: 1200px) {
	.container-fluid .recent {
		min-width: 100%;
	}
	.container-fluid .sb {
		min-width: 100%;
	}
}
@media (max-width: 720px) {
	.header-content .text-content {
		margin: 20px;
		transition: 0.5s;
	}
}
@media (max-width: 576px) {
	.header-content {
		height: auto;
		transition: 0.5s;
		text-align: center;
	}
	.header-content .text-content {
		margin: 20px;
	}
	.text-content .text {
		font-size: 14px;
	}
	.text-content .name {
		font-size: 2.5em;
		font-weight: 500;
	}
	.text-content .force {
		font-size: 1em;
		text-align: center;
	}
	.text-content .force .typing-text {
		font-size: 1.3em;
		white-space: pre-wrap;
		margin: 10px;
		animation: none;
	}
}
@keyframes typing {
	0% {
		width: 0ch;
	}
	50% {
		width: 5ch;
	}
	100% {
		width: 20ch;
	}
}
.container-fluid {
	width: calc(100% - 600px);
	margin: 10px;
	min-height: 300px;
	font-family: Poppins;
	background-color: #ffffff63;
	backdrop-filter: blur(20px);
	border-radius: 10px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}
.container-fluid .recent {
	width: 50%;
}
.container-fluid .sb {
	width: 400px;
}

.hd {
	color: rgb(0, 27, 63);
	font-size: 2em;
	font-family: "Poppins";
	margin-left: 20px;
	font-weight: 600;
}

.allnews {
	background-color: orange;
	width: 200px;
	padding: 10px 0;
	margin-left: 20px;
	border: none;
	border-radius: 10px;
}
.allnews a {
	font-size: 1.2em;
	color: #fff;
	text-decoration: none;
}
</style>

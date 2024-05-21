<template>
	<div class="sidebar">
		<div class="artical">
			<span class="heading py-3">Latest articals</span>
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
		</div>

		<hr style="margin: 25px; color: #fff" />
		<div class="subscribe">
			<form>
				<span class="h">Subscribe</span>
				<label class="text"
					>Subscribe to get latest <span>news & update</span></label
				>
				<input
					type="email"
					name="subscribeMail"
					required
					placeholder="enter your email"
				/>
				<input type="button" value="Subscribe" />
			</form>
		</div>
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
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
@media (width: 1200px) {
	.sidebar {
		flex-direction: row;
	}
	.sidebar .artical {
		width: 100%;
	}
	.sidebar .subscribe {
		width: 100%;
	}
	form input[type="email"] {
		width: 300px;
	}
}
@media (width: 576px) {
	.sidebar {
		flex-direction: column;
	}
	form input[type="email"] {
		width: 300px;
	}
}
.artical {
	width: 100%;
	display: inline;
}
/* subscribe */
.subscribe {
	display: inline;
	width: 100%;
}
form {
	margin: 25px;
	background-color: #fff;
	border-radius: 20px;
	padding: 30px 10px;
	height: 90%;
}
form .h {
	word-wrap: break-word;
	display: block;
	text-align: center;
	font-size: 2em;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-weight: 500;
	color: orange;
}
form .text {
	display: block;
	text-align: center;
	font-size: 1em;
}
form .text span {
	color: crimson;
}
form input {
	outline: none;
	width: 90%;
	max-width: 400px;
	display: block;
	margin: 20px auto;
	background-color: #fff;
	padding: 10px;
	border: none;
	border-radius: 10px;
	border: 1px solid orange;
}

form input[type="button"] {
	width: 150px;
	margin-bottom: 0px;
}
@media (max-width: 576px) {
	form input {
		max-width: 90%;
	}
}
.heading {
	display: block;
	width: 100%;
	font-family: "Poppins";
	font-size: 2em;
	margin-left: 20px;
	font-weight: 500;
	letter-spacing: 3px;
	text-align: left;
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
	font-size: 1.2em;
	font-weight: 500;
	transition: 0.5s;
}
.posts a:hover {
	color: rgb(226, 226, 226);
}
</style>

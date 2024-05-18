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
		<div class="sideview">
			<h1>Member Form</h1>
			<hr />
			<form action="">
				<label for="name">Name</label>
				<input
					type="text"
					name="name"
					placeholder="Real name or Nickname"
				/>

				<label for="username">Username</label>
				<input type="text" name="username" placeholder="username" />

				<div class="agender">
					<div class="age">
						<label for="age">Age</label>
						<input
							type="number"
							name="age"
							placeholder="how old are you?"
						/>
					</div>
					<div class="gender">
						<label for="gender">Choose Gender</label>
						<select name="gender">
							<option>select...</option>
							<option value="female">Female</option>
							<option value="male">Male</option>
							<option value="non-binary">Non-Binary</option>
							<option value="other">Other</option>
							<option value="Prefer not to answer">
								Perfer not to Answer
							</option>
						</select>
					</div>
				</div>
				<label for="force">Choose Force</label>
				<select name="force">
					<option>select...</option>
					<option value="dsquad">Dragon Squad Tni</option>
					<option value="federalwing">Fereral Wing</option>
					<option value="t1pdf">T1 - PDF</option>
					<option value="t2pdf">T2 - PDF</option>
					<option value="t3pdf">T3 - PDF</option>
					<option value="t4pdf">T4 - PDF</option>
					<option value="knu">KNU</option>
					<option value="KNLA">KNLA</option>
					<option value="other">Other</option>
					<option value="Prefer not to answer">
						Perfer not to Answer
					</option>
				</select>

				<label for="contact">Email or Phone</label>
				<input
					type="text"
					name="contact"
					placeholder="example@gmail.com"
				/>

				<textarea
					name="bio"
					rows="4"
					placeholder="Say something"
				></textarea>
				<hr />
				<button>Submit</button>
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
	justify-content: center;
}
.artical {
	max-width: 500px;
}
.heading {
	display: block;
	width: 100%;
	font-family: "Poppins";
	font-size: 2em;
	font-weight: 600;
	text-align: left;
	color: rgb(0, 27, 63);
	/* background-color: rgb(0, 27, 63); */
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

/* member form */

.sideview {
	max-width: 500px;
	height: auto;
	margin: 30px 0;
	border-radius: 20px;
	font-size: 1em;
	box-shadow: 1px 1px 5px #000000ab, -1px -1px 5px #fff;
	padding: 10px;
}
.sideview h1 {
	font-size: 2.2em;
	text-align: center;
	color: #fff;
	text-transform: uppercase;
	margin: 25px;
}
.sideview hr {
	color: #fff;
}

.sideview form {
	margin: 20px;
}
.sideview form label {
	color: #fff;
	display: block;
	margin: 10px 0 5px;
}
.sideview form input,
textarea,
select {
	width: 100%;
	background-color: #ffffff93;
	padding: 5px 10px;
	border: none;
	border-radius: 10px;
	outline-color: #fff;
	font-size: 1em;
}
.sideview form .agender {
	display: flex;
	flex-direction: row;
	gap: 10px;
}
textarea {
	margin-top: 15px;
}
button {
	cursor: pointer;
	background-color: #fff;
	width: 100%;
	padding: 10px;
	font-size: 1.3em;
	border: none;
	border-radius: 15px;
}
</style>

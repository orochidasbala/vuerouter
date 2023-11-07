<template>
	<div class="col-sm-12 col-md-12 col-lg-4 sidebar text-start">
		<section>
			<h3 class="text-center text-bg-dark p-3">Welcome</h3>
			<p>
				Hi, my name is Mr.Gnuak, I'm a web developer and system &
				network administrator. I have always been interested in
				computers, Linux & security. I created this website to share my
				findings with you.
			</p>
		</section>
		<section>
			<p>
				You can find my full stories in
				<router-link
					:to="{ name: 'About' }"
					class="nav-link d-inline text-primary"
				>
					About page
				</router-link>
			</p>
		</section>

		<section>
			<h3 class="text-center text-bg-dark p-3">Categories</h3>
			<ul class="list-group p-3">
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					Donate Us
				</li>
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					Honorable mentions
					<span class="badge bg-dark rounded-pill">2</span>
				</li>
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					News
					<span class="badge bg-dark rounded-pill">1</span>
				</li>

				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					Training
					<span class="badge bg-dark rounded-pill">8</span>
				</li>
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					Favourite
					<span class="badge bg-dark rounded-pill">5</span>
				</li>
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					scopedSaved
					<span class="badge bg-dark rounded-pill">34</span>
				</li>
			</ul>
		</section>

		<section>
			<h3 class="text-center text-bg-dark p-3">
				You can go Donate Page to
				<router-link
					:to="{ name: 'Donate' }"
					class="nav-link text-primary"
				>
					Donate Us
				</router-link>
			</h3>
			<p class="content py-4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Consequatur consectetur hic aut nostrum quos voluptate esse
				culpa, quidem ratione provident nam? Quasi asperiores dolores
				eligendi dolorum qui ipsam deleniti quidem!
			</p>
		</section>

		<section>
			<h3 class="text-center text-bg-dark p-3">Lastest articals</h3>
			<div>
				<ul class="m-4" v-for="post in lastest" :key="post.id">
					<li class="">
						<p>{{ post.title }}</p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allposts: [],
			lastest: []
		};
	},
	components: {},
	mounted() {
		fetch("http://localhost:3000/posts")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.allposts = data;
				this.lastest = this.allposts.filter(() => {
					return this.allposts;
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
</script>

<style scoped>
h3 {
	padding: 10px;
	margin: 20px;
	border-radius: 5px;
}
p {
	margin: 20px;
}

li {
	cursor: pointer;
	font-size: 1em;
	font-weight: bold;
	color: rgb(77, 77, 77);
}

li:hover {
	color: #555;
}
</style>

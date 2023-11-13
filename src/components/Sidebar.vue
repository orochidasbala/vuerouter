<template>
	<div class="col-sm-12 col-md-12 col-lg-4 sidebar text-start">
		<h3 class="fs-4 text-center text-bg-dark p-3">Welcome</h3>
		<p>
			Hi, my name is Mr.Gnuak, I'm a web developer and system & network
			administrator. I have always been interested in computers, Linux &
			security. I created this website to share my findings with you.
		</p>

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
			<h3 class="fs-4 text-center text-bg-dark p-3">Categories</h3>
			<ul class="list-group" v-for="item in catagories" :key="item.id">
				<li class="list-group-item text-primary">
					{{ item.name }}
				</li>
			</ul>
		</section>

		<section>
			<h3 class="fs-4 text-center text-bg-dark p-3">
				Go to
				<router-link
					:to="{ name: 'Donate' }"
					class="nav-link text-secondary"
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
			<h3 class="fs-4 text-center text-bg-dark p-3">Lastest articals</h3>
			<div>
				<ul class="m-1" v-for="post in posts" :key="post.id">
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
import Catagories from "../composables/Catagories";
export default {
	props: ["posts"],
	setup(props) {
		let { catagories, load, error } = Catagories();
		load();

		props.posts.forEach((e) => {
			//need to filter latest 5 posts
		});

		return { catagories, load, error };
	}
};
</script>

<style scoped>
h3 {
	margin: 20px;
	border-radius: 5px;
	font-family: "Poppins";
}
p {
	margin: 20px;
}

.list-group-item {
	border: none;
	margin: 3px 20px;
	cursor: pointer;
	font-size: 1em;
	font-weight: bold;
	border-left: 2px solid #176b87;
	border-right: 2px solid #176b87;
}
.rltposts a {
	text-decoration: none;
}
</style>

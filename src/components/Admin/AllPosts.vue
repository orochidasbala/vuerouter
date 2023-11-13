<template>
	<div class="container">
		<ul class="nav d-flex justify-content-between align-item-center">
			<div>
				<h3 class="fs-2 my-3 nav-brand">Manage Posts</h3>
			</div>
			<div class="d-flex align-item-center">
				<button
					class="nav-item btn"
					@click="current = 'all'"
					:class="{ active: current === 'all' }"
				>
					All
				</button>
				<button
					class="nav-item btn mx-4"
					@click="current = 'completed'"
					:class="{ active: current === 'completed' }"
				>
					Completed
				</button>
				<button
					class="nav-item btn"
					@click="current = 'ongoing'"
					:class="{ active: current === 'ongoing' }"
				>
					Ongoing
				</button>
			</div>
		</ul>

		<table class="table table-info table-striped my-3 text-start">
			<thead>
				<tr>
					<th>No.</th>
					<th>Post Id</th>
					<th>Time</th>
					<th>Author</th>
					<th>Title</th>
					<th class="text-center">Contents</th>
					<th class="text-center">Image</th>
					<th class="text-center">Process</th>
					<th class="text-center">Edit</th>
					<th class="text-center">Delete</th>
				</tr>
			</thead>
			<tbody v-for="(post, index) in filterposts" :key="post.id">
				<tr>
					<td>{{ index + 1 }}</td>
					<td>{{ post.id }}</td>
					<td>{{ 56464 }} ms</td>
					<td>{{ post.author }}</td>
					<td>{{ post.title }}</td>
					<td class="text-center">
						<i
							class="bi bi-body-text text-info"
							@click="showcontent = true"
						></i>
					</td>
					<td class="text-center">
						<i class="bi bi-images text-success"></i>
					</td>
					<td
						class="text-center"
						:class="{
							complete: post.complete,
							uncomplete: !post.complete
						}"
					>
						<i class="bi bi-check-lg"></i>
					</td>
					<td class="text-center">
						<i
							class="text-primary bi bi-pencil-square"
							@click="editpost(post.id)"
						></i>
					</td>
					<td class="text-center">
						<i
							class="bi bi-trash text-danger"
							@click="delpost(post.id)"
						></i>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allposts: [],
			current: "all",
			api: "http://localhost:3000/posts/"
		};
	},
	methods: {
		fetchserver() {
			fetch(this.api)
				.then((response) => {
					return response.json();
				})
				.then((datas) => {
					this.allposts = datas;
				})
				.catch((err) => {
					console.log();
				});
		}
	},
	computed: {
		filterposts() {
			if (this.current === "completed") {
				return this.allposts.filter((post) => {
					return post.complete;
				});
			}
			if (this.current === "ongoing") {
				return this.allposts.filter((post) => {
					return !post.complete;
				});
			}
			return this.allposts;
		}
	},
	mounted() {
		this.fetchserver();
	}
};
</script>

<style scoped>
h3 {
	font-family: "Poppins";
}
button {
	border: none;
	font-family: "Poppins";
	color: rgb(128, 128, 128);
}
.active {
	color: rgb(0, 0, 0);
	font-weight: 500;
}
table thead th {
	font-family: "Poppins";
	font-weight: 500;
}
.complete {
	color: rgb(60, 150, 42);
}
.uncomplete {
	color: crimson;
}
</style>

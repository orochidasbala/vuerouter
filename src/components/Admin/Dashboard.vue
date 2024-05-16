<template>
	<div class="panel row justify-content-center align-item-center">
		<div class="navbar bg-dark col-2">
			<nav class="nav nav-tab">
				<h3 class="text-light">Admin Hub</h3>
				<span
					class="flex-sm-fill text-sm-center nav-link bg-light"
					@click="showposts"
					>All Posts</span
				>
				<span
					class="flex-sm-fill text-sm-center nav-link bg-light"
					@click="showdraft"
					>Draft</span
				>
				<span
					class="flex-sm-fill text-sm-center nav-link bg-light"
					@click="upload = true"
					>Create a new post</span
				>
			</nav>
		</div>
		<div class="col-10">
			<div v-if="allposts">
				<table class="table table-info table-striped my-3">
					<thead>
						<tr>
							<th>No.</th>
							<th>Post Id</th>
							<th>Time</th>
							<th>Author</th>
							<th>Title</th>
							<th>Contents</th>
							<th>Image</th>
							<th>Process</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody v-for="(post, index) in posts" :key="post.id">
						<tr>
							<td>{{ index + 1 }}</td>
							<td>{{ post.id }}</td>
							<td>{{ 56464 }} ms</td>
							<td>{{ post.author }}</td>
							<td>{{ post.title }}</td>
							<td>
								<i
									class="bi bi-body-text text-info"
									@click="showcontent = true"
								></i>
							</td>
							<td>{{ post.image }}</td>
							<td
								class="text-danger"
								:class="{ complete: post.complete }"
								@click="completepost(post.id, post.complete)"
							>
								<i class="bi bi-check-lg"></i>
							</td>
							<td>
								<i
									class="text-primary bi bi-pencil-square"
									@click="editpost(post.id)"
								></i>
							</td>
							<td>
								<i
									class="bi bi-trash text-danger"
									@click="delpost(post.id)"
								></i>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-if="draftposts">
				<table class="table table-warning table-striped my-3">
					<thead>
						<tr>
							<th>No.</th>
							<th>Author</th>
							<th>Title</th>
							<th>Time</th>
							<th>Contents</th>
							<th>Image</th>
							<th>Tags</th>
							<th>Process</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody v-for="(post, index) in draft" :key="post.id">
						<tr>
							<td>{{ index + 1 }}</td>
							<td>{{ post.author }}</td>
							<td>{{ post.title }}</td>
							<td>{{ 56464 }} ms</td>
							<td>
								<i
									class="bi bi-body-text text-info"
									@click="showcontent = true"
								></i>
							</td>
							<td>{{ post.image }}</td>
							<td>{{ post.tags }}</td>

							<td>
								<i
									class="bi bi-check-lg text-danger"
									@click="
										completepost(post.id, post.complete)
									"
								></i>
							</td>
							<td>
								<i
									class="text-primary bi bi-pencil-square"
									@click="editpost(post.id)"
								></i>
							</td>
							<td>
								<i
									class="bi bi-trash text-danger"
									@click="delpost(post.id)"
								></i>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<div v-if="upload">
		<Create @close="upload = false" />
	</div>
</template>

<script>
import GetPosts from "@/composables/GetPosts";
import Create from "./Create.vue";

export default {
	components: {
		Create
	},
	setup() {
		const { allposts, load, error } = GetPosts();
		console.log(allposts);
		return { allposts, load, error };
	}
};
</script>

<style scoped>
.panel {
	height: 90vh;
}
h3 {
	margin: 20px;
}
nav {
	flex-direction: column;
	align-items: center;
}
.nav-link {
	cursor: pointer;
	width: 90%;
	border-radius: 10px;
	margin: 10px;
}
.navbar {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
i {
	cursor: pointer;
}
.complete {
	color: rgb(35, 143, 35);
}
</style>

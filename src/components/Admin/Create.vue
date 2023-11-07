<template>
	<div class="container d-flex justify-content-center">
		<form class="text-bg-dark m-3 p-5 text-start">
			<div class="text-end">
				<i class="fs-1 bi bi-x" @click="close"></i>
			</div>
			<h1 class="m-5 text-center">CREATE POST</h1>

			<div class="m-3">
				<label class="my-2" for="title">Post Title</label>
				<input type="text" name="title" class="form-control p-2" />
			</div>

			<div class="m-3">
				<label for="author" class="my-2">Author</label>
				<input type="text" name="author" class="form-control p-2" />
			</div>

			<div class="m-3">
				<label for="content" class="my-2">Content</label>
				<textarea
					name="content"
					class="form-control"
					cols="100"
					rows="10"
				></textarea>
			</div>

			<div class="text-end m-3 mt-5 p-2">
				<button type="submit" class="btn btn-primary">Post</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	methods: {
		close() {
			this.$emit("close");
		}
	}
};
</script>

<style scoped>
.container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	z-index: 10000;
}
form {
	border-radius: 20px;
	border: 2px solid #bbb;
	max-width: 60%;
}
h1 {
	font-weight: bold;
}
label {
	text-align: start;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.8em;
	color: #bbb;
}
button {
	font-weight: bold;
	width: 150px;
	padding: 10px;
}
i {
	cursor: pointer;
}
</style>

<template>
	<div class="container d-flex flex-column justify-content-center">
		<form class="m-3 p-3 text-start" @submit.prevent="uploadpost">
			<h1 class="m-3 text-center">CREATE POST</h1>
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

			<div class="text-end m-3 mt-5">
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
	font-family: "Poppins";
	max-width: 80%;
}
form {
	border-radius: 20px;
	border: 1px solid #cccccc;
}
h1 {
	font-weight: 500;
}
label {
	text-align: start;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.8em;
	color: #5e5e5e;
}
input,
textarea {
	border-color: #5e5e5e;
}
button {
	font-weight: 400;
	width: 150px;
	padding: 10px;
}
i {
	cursor: pointer;
}
</style>

<template>
	<div
		class="card d-flex flex-lg-row flex-md-row flex-sm-coloum justify-content-between align-items-start"
	>
		<div class="">
			<img
				class="align-item-start justify-content-center"
				src="../assets/max.png"
				alt=""
			/>
		</div>
		<div class="card-body align-item-start text-break text-start">
			<router-link
				class="card-title text-dark"
				:to="{ name: 'Read', params: { id: post.id } }"
				style="text-decoration: none; color: inherit"
			>
				<span class="fs-5 my-2 d-flex justify-content-between">
					<strong>{{ post.title }}</strong>
					<small>3 days ago</small>
					<!-- <strong>{{ post.author }}</strong> -->
				</span>
			</router-link>
			<p class="card-text">
				{{ preview }}
				<router-link
					class="card-title text-primary fs-5"
					:to="{ name: 'Read', params: { id: post.id } }"
					style="text-decoration: none; color: inherit"
				>
					<small>see more ...</small>
				</router-link>
			</p>
			<div class="d-flex w-100 justify-content-between"></div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["post"],
	setup(props) {
		let preview = props.post.content.substring(0, 150);
		return { preview };
	}
};
</script>

<style scoped>
img {
	width: 220px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-self: center;
	margin: 10px 10px;
	border-radius: 15px;
}
@media screen and (max-width: 800px) {
	img {
		width: 95%;
	}
}
span {
	cursor: pointer;
}
.card {
	border: none;
	border-radius: 0px;
}
.card-text {
	text-align: justify;
}
</style>

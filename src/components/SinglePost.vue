<template>
	<div class="content">
		<div class="postlist">
			<div class="img">
				<img src="../assets/max.png" />
			</div>
			<div class="details">
				<div class="title">
					<router-link
						:to="{ name: 'Read', params: { id: post.id } }"
					>
						{{ post.title }}
					</router-link>
				</div>
				<div class="header">
					<div class="date">1 week ago</div>
					<div class="tags">
						<span v-for="tag in post.tags" :key="tag">
							<router-link
								:to="{ name: 'Tag', params: { tag: tag } }"
							>
								{{ tag }}
							</router-link>
						</span>
					</div>
				</div>
				<div class="previewpost">
					{{ preview }}
				</div>
				<router-link
					class="text-primary fs-5"
					:to="{ name: 'Read', params: { id: post.id } }"
					style="text-decoration: none; color: inherit"
				>
					<small>see more ...</small>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["post"],
	setup(props) {
		let preview = props.post.content.substring(0, 120);
		return { preview };
	}
};
</script>

<style scoped>
/* color: rgb(0, 27, 63); */
.content {
	background: #eee;
	padding: 20px;
	margin: 5px 20px;

	border-radius: 2px;
}
a {
	text-decoration: none;
	color: rgb(0, 27, 63);
}
.content .postlist {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.content .postlist .img img {
	width: 200px;
	height: 130px;
	margin-right: 15px;
	border: 1px solid #000;
}

.content .postlist .details {
	display: flex;
	flex-direction: column;
}
.content .postlist .details .title {
	font-size: 20px;
	cursor: pointer;
}
.content .postlist .details .header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.content .postlist .details .header .date {
	font-size: 14px;
	color: #555;
	/* padding: 5px 0; */
}
.content .postlist .details .header .tags {
	display: flex;
	flex-direction: row;
}
.content .postlist .details .header .tags span {
	margin-left: 10px;
	/* padding: 5px 15px; */
	color: crimson;
	font-weight: 700;
	cursor: pointer;
}
.content .postlist .details .previewpost {
	text-align: justify;
	margin-top: 10px;
}

@media (max-width: 780px) {
	.content .postlist {
		flex-direction: column;
	}
	.content .postlist .img {
		max-width: 350px;
		max-height: 200px;
	}
	.content .postlist .img img {
		width: 100%;
		height: 100%;
		margin: 0 0 5px 0;
	}
	.content .postlist .details {
		max-width: 350px;
	}
}
@media (max-width: 500) {
	.content {
		margin: 10px;
	}
	.content .postlist .img {
		max-width: 300px;
		max-height: 175px;
	}
	.content .postlist .img img {
		width: 100%;
		height: 100%;
		margin: 0 0 5px 0;
	}
	.content .postlist .details {
		width: auto;
	}
}
</style>

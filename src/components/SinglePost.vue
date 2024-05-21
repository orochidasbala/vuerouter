<template>
	<div class="content">
		<div class="postlist">
			<img
				src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
				alt="rover"
			/>
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
					<small>read more ...</small>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["post"],
	setup(props) {
		let preview = props.post.contents.substring(0, 120);
		return { preview };
	}
};
</script>

<style scoped>
/* color: rgb(0, 27, 63); */
.content {
	padding: 0px;
	margin: 5px 20px;
	border-radius: 20px;
}
a {
	text-decoration: none;
	color: rgb(0, 27, 63);
}
.content .postlist {
	background-color: #eee;
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow: hidden;
	height: 210px;
	border-radius: 20px;
	margin-bottom: 20px;
	/* box-shadow: 0 0 3px #fff, 0 0 5px #0000007a; */
}
.content .postlist img {
	width: 300px;
	height: 100%;
	border-top-left-radius: 15px;
	border-bottom-left-radius: 15px;
}

.content .postlist .details {
	display: flex;
	flex-direction: column;
	padding: 20px;
}
.content .postlist .details .title {
	font-size: 1.8em;
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
		height: auto;
	}
	.content .postlist img {
		max-width: 400px;
		min-width: 90%;
		height: auto;
		margin: 10px 0 5px 0;
		border-radius: 15px;
	}
	.content .postlist .details {
		max-width: 90%;
		padding: 0;
		margin-bottom: 10px;
	}
}
@media (max-width: 500px) {
	.content {
		margin: 10px;
	}
	.content .postlist img {
		max-width: 90%;
		height: auto;
		margin: 10px 0 5px 0;
		border-radius: 15px;
	}
	.content .postlist .details {
		max-width: 90%;
		padding: 0;
		margin-bottom: 10px;
	}
}
</style>

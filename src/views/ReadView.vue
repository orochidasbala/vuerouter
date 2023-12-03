<template>
	<div class="container p-4">
		<div class="row">
			<div class="post col-sm-10 col-md-10 col-lg-8">
				<div class="heading">
					<span class="post-title">{{ post.title }}</span>
					<div>
						<div class="tags" v-for="tag in post.tags" :key="tag">
							<span>{{ tag }}</span>
						</div>
					</div>
				</div>
				<div class="date">
					<span>1 week ago</span>
				</div>
				<div class="contents">
					<p>
						{{ post.content }}
					</p>
				</div>
				<div class="imageframe">
					<img src="../assets/dsLogo.png" />
				</div>
				<div class="author">post by: {{ post.author }}</div>
			</div>

			<Sidebar :posts="allposts" />
		</div>
	</div>
	<hr />

	<div class="relatedposts">
		<div class="cardview">Related Posts</div>
		<div v-for="tag in post.tags" :key="tag">
			<RelatedNews :tag="tag" />
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import RelatedNews from "../components/RelatedNews.vue";
import singlePost from "../composables/singlePost";
import Sidebar from "@/components/Sidebar.vue";
import AllPosts from "@/composables/AllPosts";

export default {
	props: ["id"],
	components: {
		RelatedNews,
		Sidebar
	},
	setup(props) {
		// let id = ref(Number(props.id));
		let { post, loadsingle, singleerror } = singlePost(props.id);
		loadsingle();
		let { allposts, load, error } = AllPosts();
		load();
		// use index number of all posts array

		return { post, singleerror, allposts };
	}
};
</script>

<style scoped>
.heading {
	display: flex;
	justify-content: space-between;
}
.heading .post-title {
	font-size: 20px;
}
.heading .tags {
	display: inline;
	margin-left: 15px;
	color: orange;
	font-size: 18px;
	font-weight: 700;
}
.post {
	padding: 20px;
}
.post .date {
	color: #777;
}
.post .contents {
	margin: 20px auto;
}
.post .imageframe {
	width: 100%;
	height: auto;
	border: 1px solid #adadad;
}
.post .imageframe img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.post .author {
	text-align: center;
	margin: 20px 0;
}
.relatedposts .cardview {
	font-family: poppins;
	font-size: 20px;
	margin-top: 20px;
	text-align: center;
}
</style>

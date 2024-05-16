<template>
	<!-- <div class="container p-4"> -->
	<!-- <div class="row"> -->
	<!-- <div class="post col-sm-10 col-md-10 col-lg-8">
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
						{{ post.contents }}
					</p>
				</div>
				<div class="imageframe">
					<img src="../assets/dsLogo.png" />
				</div>
				<div class="author">post by: {{ post.author }}</div>
			</div> -->
	<div class="container">
		<section>
			<div class="heading">
				<div>
					<h1>{{ post.title }}</h1>
					<span>2 hours ago</span>
				</div>
				<div>
					<div class="tags" v-for="tag in post.tags" :key="tag">
						{{ tag }}
					</div>
				</div>
			</div>
			<div class="content">
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N6-8F8dbxZHjp-Btj6cQ4AHaEK%26pid%3DApi&f=1&ipt=87851d159af6f80110fbae0bac437ac6829d9da96d84a60c8886557457958894&ipo=images"
					alt=""
				/>
				<p>
					{{ post.contents }}
				</p>
			</div>
			<div class="details">
				<li>
					<img src="../assets/facebook.png" alt="" />
					<a href="">facebook page</a>
				</li>
				<li>
					<img src="../assets/telegram.png" alt="" />
					<a href="">telegram channel</a>
				</li>
				<li>
					<img src="../assets/youtube.png" alt="" />
					<a href="">youtube channel</a>
				</li>
				<li>
					<img src="../assets/donate.png" alt="" />
					<a href="">donate page</a>
				</li>
			</div>
			<div class="features">
				<div class="author">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.M0T2lrei9DX8tcf5uNDeZwHaHa%26pid%3DApi&f=1&ipt=c4c17d2be9d2340c12fdadfa2032f5cd211193d68120404305e7573e265a7923&ipo=images"
						alt=""
					/>
					<span>{{ post.author }}</span>
				</div>
				<div class="comments">
					Share post -
					<img
						src="../assets/icons8-share-windows-11-outline/Android/icons8-share-36(-hdpi).png"
						alt=""
					/>
				</div>
			</div>
		</section>
		<Sidebar :posts="allposts" />
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
import GetPosts from "@/composables/GetPosts";

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
		let { allposts, load, error } = GetPosts();
		load();
		// use index number of all posts array

		return { post, singleerror, allposts };
	}
};
</script>

<style scoped>
.container {
	max-width: 80%;
	height: auto;
	margin: 40px auto;
	font-family: Poppins;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.container section {
	max-width: 1000px;
	height: auto;
	padding: 30px;
	font-size: 1.3em;
}
.container section .heading {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.heading div h1 {
	display: inline;
	font-weight: 600;
}
.heading div span {
	font-size: 16px;
	color: rgb(109, 109, 109);
	margin-left: 20px;
}
.heading .tags {
	cursor: pointer;
	list-style: none;
	display: inline;
	margin-left: 10px;
	background-color: navy;
	padding: 8px 15px;
	font-size: 0.8em;
	color: #fff;
	border-radius: 10px;
}
.content img {
	margin: 30px 0 20px;
	width: 100%;
	height: 500px;
	border: 2px solid crimson;
	border-radius: 15px;
}
.content p {
	text-align: justify;
}
/* details */

.details {
	margin-top: 30px;
	background-color: #d4d4d4;
	border-radius: 10px;
	padding: 30px 20px;
	border: 3px solid rgb(255, 182, 46);
	box-shadow: 0 0 10px #000;
}
.details li {
	list-style: none;
	line-height: 2em;
}
.details li img {
	width: 25px;
	height: auto;
	margin-right: 20px;
}
.details li a {
	cursor: pointer;
	color: navy;
	text-decoration: none;
}
/* features */
.features {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 50px;
	align-items: center;
}
.features .author {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
}
.features .author img {
	width: 60px;
	height: 60px;
	border: none;
	border-radius: 50%;
	margin-right: 15px;
}
.comments img {
	width: 65px;
	cursor: pointer;
	padding: 2px 20px;
	margin-left: 10px;
	border: none;
	border-radius: 8px;
	background-color: #aaa;
	color: #fff;
}

/* .heading {
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
} */
</style>

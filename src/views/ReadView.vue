<template>
	<div class="container">
		<div class="row">
			<section>
				<div class="heading">
					<div>
						<h1>{{ post.title }}</h1>
						<span>{{ post.time }}</span>
					</div>
					<div>
						<div class="tags" v-for="tag in post.tags" :key="tag">
							<router-link
								:to="{ name: 'Tag', params: { tag: tag } }"
							>
								{{ tag }}
							</router-link>
						</div>
					</div>
				</div>
				<div class="content">
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.N6-8F8dbxZHjp-Btj6cQ4AHaEK%26pid%3DApi&f=1&ipt=87851d159af6f80110fbae0bac437ac6829d9da96d84a60c8886557457958894&ipo=images"
						alt=""
					/>
					<p>
						{{ post.contents }} Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Voluptate libero nobis
						ratione ad nisi! Atque velit modi corporis voluptatum
						eaque placeat expedita minus, ducimus cumque ab quasi
						excepturi, dolore reprehenderit recusandae magni
						veritatis nam dignissimos totam voluptate enim. Sunt, at
						dolores suscipit fugiat est enim. Alias illo quae fuga,
						amet doloribus dolore. Sed natus, consectetur
						repellendus delectus assumenda, obcaecati ducimus
						voluptatum magnam amet quo aut magni reiciendis, alias
						unde optio porro molestias omnis facere perferendis
						labore officia? Sed voluptates laudantium impedit
						similique repellat, enim dicta doloremque labore, odit
						vero voluptatum dignissimos perspiciatis cumque eligendi
						nostrum aliquam ea omnis qui ipsa deserunt? Est enim
						quisquam numquam soluta impedit, vitae placeat
						asperiores dolorum vel adipisci, repellat quasi. Facilis
						corporis minus rem voluptate unde doloremque nam
						aspernatur consequuntur laborum explicabo esse maiores,
						officiis veniam minima, assumenda inventore dolores?
						Excepturi sapiente, itaque, aut recusandae cumque
						mollitia obcaecati odit tempora repudiandae similique
						voluptas corporis unde. Ab, vitae quisquam nesciunt
						possimus sunt perferendis cupiditate beatae natus dicta
						hic, accusantium sit nobis! Debitis culpa sunt
						reprehenderit voluptas nemo cum veniam! Quisquam
						similique reprehenderit quo nemo ullam ad ipsum animi
						unde, dolore saepe beatae soluta aliquam excepturi,
						assumenda sapiente, dignissimos velit voluptas alias
						accusamus ratione? Quam, sequi officia.
					</p>
				</div>
				<div class="links">
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
						<span>Share post -</span>
						<img
							src="../assets/icons8-share-windows-11-outline/Android/icons8-share-36(-hdpi).png"
							alt=""
						/>
					</div>
				</div>
			</section>

			<Sidebar :posts="allposts" />
		</div>
	</div>
	<hr />

	<div class="relatedposts">
		<div class="similar">Similar Posts</div>
		<div class="slide-container swiper">
			<div class="slide-content">
				<div class="card-wrapper swiper-wrapper">
					<!--CARDS-->
					<div
						class="card swiper-slide"
						v-for="post in limit"
						:key="post.id"
					>
						<div class="image-content">
							<span class="overlay"></span>
							<div class="card-image">
								<img
									class="card-img"
									src="../assets/dsLogo.png"
									alt=""
								/>
							</div>
						</div>
						<div class="card-content">
							<h2 class="name">
								<!-- <router-link
								class="card-title my-3"
								:to="{ name: 'Read', params: { id: post.id } }"
								@click="clickme(post.id)"
							> -->
								post.title
								<!-- </router-link> -->
							</h2>
							<p class="description">
								post.contents.substring(0, 100)
							</p>
							<button class="button">
								<!-- <router-link
								class="card-title text-dark my-3"
								:to="{ name: 'Read', params: { id: post.id } }"
								style="text-decoration: none; color: inherit"
							> -->
								Read more...
								<!-- </router-link> -->
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-button-next swiper-navBtn"></div>
			<div class="swiper-button-prev swiper-navBtn"></div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import singlePost from "../composables/singlePost";
import Sidebar from "@/components/Sidebar.vue";
import GetPosts from "@/composables/GetPosts";

export default {
	props: ["id"],
	components: {
		Sidebar
	},
	setup(props) {
		let { post, loadsingle, singleerror } = singlePost(props.id);
		loadsingle();
		let { allposts, load, error } = GetPosts();
		load();
		let relatedpost = ref([]);

		var swiper = new Swiper(".slide-content", {
			slidesPerView: 3,
			spaceBetween: 25,
			loop: true,
			centerSlide: true,
			fade: true,
			grabCursor: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				dynamicBullets: true
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevE1: ".swiper-button-prev"
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				520: {
					slidesPerView: 2
				},
				990: {
					slidesPerView: 3
				}
			}
		});

		let clickme = (postid) => {
			router.push({ name: "Read", params: { id: postid } });
		};

		allposts.value.filter((p) => {
			return relatedpost.value.push(p.id.includes(props.id));
		});

		let limit = computed(() => {
			return relatedpost.value.slice(0, 4);
		});
		return {
			relatedpost,
			swiper,
			limit,
			clickme,
			post,
			singleerror,
			allposts
		};
	}
};
</script>

<style scoped>
.relatedposts .body {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #a81818;
}
.relatedposts .similar {
	color: #fff;
	text-align: center;
	font-size: 1.5em;
}

.container {
	max-width: 90%;
	background-color: #ffffff63;
	backdrop-filter: blur(20px);
	border-radius: 10px;
	margin: 40px 5%;
	font-family: Poppins;
}
.container section {
	max-width: calc(70% - 80px);
	padding: 30px;
	font-size: 1.2em;
	transition: 0.5s;
}
.container section .heading {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.heading div h1 {
	display: inline;
	font-weight: 600;
}
.heading div span {
	font-size: 16px;
	color: rgb(230, 230, 230);
	margin-left: 20px;
}
.heading > div {
	margin-top: 20px;
}
.heading .tags {
	cursor: pointer;
	list-style: none;
	display: inline;
	margin-right: 10px;
	background-color: navy;
	padding: 8px 15px;
	font-size: 0.8em;
	border-radius: 10px;
}
.heading .tags a {
	color: #fff;
	text-decoration: none;
}
.content img {
	margin: 30px 0 20px;
	width: 100%;
	height: auto;
	border: 2px solid #fff;
	border-radius: 15px;
}
.content p {
	text-align: justify;
	color: #000;
}
/* links */

.links {
	margin-top: 30px;
	border-radius: 10px;
	padding: 30px 20px;
	box-shadow: 0 0 5px #fff;
}
.links li {
	list-style: none;
	line-height: 2em;
}
.links li img {
	width: 25px;
	height: auto;
	margin-right: 20px;
}
.links li a {
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
.container .side {
	width: 30%;
}
@media (max-width: 1000px) {
	.container section {
		min-width: 100%;
	}
	.content img {
		margin: 30px 0 20px;
		width: 100%;
		height: auto;
		border: 2px solid #fff;
		border-radius: 15px;
	}
}

@media (max-width: 580px) {
	.comments span {
		display: none;
	}
}

/* relative section */
.slide-container {
	max-width: 1120px;
	width: 100%;
}
.card {
	border-radius: 25px;
	background-color: #fff;
}
.slide-content {
	margin: 0 40px;
	padding: 45px 20px;
	overflow: hidden;
}
.image-content,
.card-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 14px;
}
.image-content {
	position: relative;
	row-gap: 5px;
	padding: 25px 0px;
}
.overlay {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: #bebd00;
	border-radius: 25px 25px 0 25px;
}
.overlay::before,
.overlay::after {
	content: "";
	position: absolute;
	right: 0;
	bottom: -40px;
	height: 40px;
	width: 40px;
	background-color: #bebd00;
}
.overlay::after {
	border-radius: 0 25px 0 0;
	background-color: #fff;
}
.card-image {
	position: relative;
	height: 150px;
	width: 150px;
	border-radius: 50%;
	background: #cccccc;
}
.card-image .card-img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 4px solid #004754;
}
.name {
	font-size: 18px;
	font-weight: 500;
	color: #004754;
	margin: 0 0 10px 0;
}
.description {
	font-size: 14px;
	color: #004754;
	text-align: center;
}
.button {
	border: none;
	font-size: 14px;
	color: #fff;
	padding: 8px 20px;
	background-color: #004754;
	margin: 14px;
	cursor: pointer;
	transition: all 0.3s ease;
}
.button:hover {
	background-color: #bebd00;
}
.swiper-navBtn {
	transition: color 0.5s ease;
}
.swiper-navBtn::before,
.swiper-navBtn::after {
	font-size: 20px;
}
.swiper-button-next {
	right: 0 !important;
	color: #bebd00 !important;
}
.swiper-button-next:hover {
	color: #004754 !important;
}
.swiper-button-prev {
	left: 0 !important;
	color: #bebd00 !important;
}
.swiper-button-prev:hover {
	color: #004754 !important;
}
.swiper-pagination-bullet {
	background-color: #000000 !important;
	opacity: 1 !important;
}
.swiper-pagination-bullet-active {
	background-color: #bebd00 !important;
}
.swiper-pagination-bullet {
	color: #ffffff !important;
}
@media screen and (max-width: 768px) {
	.slide-content {
		margin: 0 10px;
	}
	.swiper-navBtn {
		display: none !important;
	}
}
</style>

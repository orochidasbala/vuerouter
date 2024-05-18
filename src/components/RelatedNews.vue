<template>
	<div class="slide-container swiper">
		<div class="slide-content">
			<div class="card-wrapper swiper-wrapper">
				<!--CARDS-->
				<div class="card swiper-slide">
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
	<!-- <div class="container-fluid py-4">

		<div class="contents">
			<div class="card" v-for="post in limit" :key="post.id">
				<div class="imageframe">
					<router-link
						class="card-title"
						:to="{ name: 'Read', params: { id: post.id } }"
					>
						<img
							class="align-item-center justify-content-center"
							src="../assets/max.png"
							alt=""
						/>
					</router-link>
				</div>
				<div class="card-body">
					<router-link
						class="card-title my-3"
						:to="{ name: 'Read', params: { id: post.id } }"
						@click="clickme(post.id)"
					>
						<div class="fs-5">
							<strong>{{ post.title }}</strong>
						</div>
					</router-link>
					<div class="d-flex justify-content-between text-light my-2">
						<small class="date">3 days ago</small>
						<div>
							<div
								class="catpill text-light bg-primary"
								v-for="tag in post.tags"
								:key="tag"
							>
								<router-link
									:to="{ name: 'Tag', params: { tag: tag } }"
								>
									{{ tag }}
								</router-link>
							</div>
						</div>
					</div>
					<p class="card-text my-3">
						{{ post.contents.substring(0, 60) }}

						<router-link
							class="card-title text-dark my-3"
							:to="{ name: 'Read', params: { id: post.id } }"
							style="text-decoration: none; color: inherit"
						>
							<span>Read more...</span>
						</router-link>
					</p>
				</div>
			</div>
		</div>
	</div> -->
</template>

<script>
import { computed, ref } from "vue";
import GetPosts from "@/composables/GetPosts";
import router from "@/router";
export default {
	props: ["tag"],
	setup(props) {
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
		let { allposts, load, error } = GetPosts();
		load();

		let relatedpost = computed(() => {
			return allposts.value.filter((post) => {
				return post.tags.includes(props.tag);
			});
		});

		let limit = computed(() => {
			return relatedpost.value.slice(0, 4);
		});
		return { limit, relatedpost, swiper, limit, clickme };
	}
};
</script>

<style scoped>
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

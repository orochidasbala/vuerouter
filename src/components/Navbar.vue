<template>
	<div class="navbar">
		<nav class="nav">
			<router-link to="/">
				<div class="logotext">
					<img src="../assets/logo.png" />
					<div class="teamname">
						<span class="force">DragonSquad</span>
						<span class="org">UAV Force</span>
					</div>
				</div>
			</router-link>
			<div class="menu">
				<ul class="menulist">
					<li>
						<router-link to="/" class="active" aria-current="page">
							Home
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'News' }"> News </router-link>
					</li>
					<li>
						<router-link :to="{ name: 'Donate' }">
							Donate Us
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'About' }">
							About Us
						</router-link>
					</li>
				</ul>
			</div>
			<input
				type="text"
				placeholder="search here"
				class="searchbar"
				v-model="searchkey"
				@keyup.enter="enter"
			/>
			<label class="searchbtn" @click="showsearch">
				<i class="bi bi-search"></i>
			</label>

			<label class="checkbtn" @click="showmenu">
				<i class="bi bi-list"></i>
			</label>
		</nav>
	</div>
	<div class="mainsearchbox" @click.self="hidesearchbox">
		<div class="searchbox" @click.self="hidesearchbox">
			<form>
				<div class="title">
					<label for="cars">search by : title </label>
					<!-- <select name="cars" id="cars" v-model="choose">
						<option value="title">Title</option>
						<option value="content">Content</option>
						<option value="catagory">Catagory</option>
					</select> -->
				</div>
				<div>
					<div class="search">
						<input
							type="text"
							placeholder="Search here ..."
							v-model="searchkey"
							@keyup.enter="enter"
						/>
						<i class="bi bi-search"></i>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { computed, ref } from "vue";
import router from "@/router";
export default {
	setup() {
		let showmenu = () => {
			document.querySelector(".menulist").classList.toggle("active");
		};
		let showsearch = () => {
			document.querySelector(".mainsearchbox").style.display = "block";
		};
		let hidesearchbox = () => {
			document.querySelector(".mainsearchbox").style.display = "none";
		};

		// data searching

		let searchkey = ref("");

		let enter = () => {
			router.push({
				name: "Search",
				params: { result: searchkey.value }
			});
			hidesearchbox();
			searchkey.value = "";
		};

		return {
			showmenu,
			showsearch,
			hidesearchbox,
			searchkey,
			enter
		};
	}
};
</script>

<style scoped>
.navbar {
	position: sticky;
	top: 0;
	background-color: orange;
	width: 100%;
	z-index: 100;
}
.navbar .nav {
	font-family: poppins;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.navbar .nav a {
	text-decoration: none;
	color: #fff;
	padding: 8px 12px;
}
/* .navbar .nav a:is(:link, :active, :visited).active {
	color: crimson;
} */
.navbar .nav .logotext {
	display: flex;
	flex-direction: row;
	cursor: pointer;
	padding: 0 25px;
}
.navbar .nav .logotext img {
	width: 60px;
	height: 65px;
	line-height: 60px;
}
.navbar .nav .logotext .teamname {
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	margin-left: 15px;
}
.navbar .nav .logotext .teamname .force {
	font-weight: 500;
	font-size: 1.25em;
}
.navbar .nav .logotext .teamname .org {
	font-size: 0.8em;
	font-weight: 500;
	text-transform: uppercase;
}
/* navbar menu */

.navbar .nav .menu .menulist {
	margin: auto;
}
.navbar .nav .menu .menulist li {
	cursor: pointer;
	display: inline-block;
	line-height: 60px;
	padding: 0 5px;
	font-weight: 500;
	font-size: 16px;
	text-transform: uppercase;
}
.navbar .nav .menu .menulist li a:hover {
	background-color: rgb(2, 49, 110);
	border-radius: 10px;
}
/* .navbar .nav .menu .menulist li a.active {
	color: rgb(2, 49, 110);
} */
/* navbar search */

.navbar .nav .searchbar {
	border: none;
	border-radius: 10px;
	background-color: #ffffffb2;
	color: #555;
	padding: 10px 15px;
	outline: none;
	width: 250px;
	margin-right: 30px;
}
.navbar .nav .searchbtn {
	border: none;
	color: #fff;
	transition: all 0.13s ease-in;
	margin-right: 30px;
	font-size: 25px;
	font-weight: 700;
	cursor: pointer;
	line-height: 70px;
	display: none;
}

.navbar .nav .searchbtn:hover {
	color: #272727;
}

/* responsive menu button */
.checkbtn {
	color: #fff;
	font-weight: 700;
	font-size: 40px;
	float: right;
	line-height: 70px;
	cursor: pointer;
	margin-right: 15px;
	display: none;
}
.checkbtn:hover {
	color: #272727;
}
@media (max-width: 1000px) {
	.navbar .nav .searchbar {
		display: none;
	}
	.navbar .nav .searchbtn {
		display: inline;
	}
}

@media (max-width: 780px) {
	.checkbtn {
		display: block;
	}

	.menulist {
		position: fixed;
		top: 100px;
		right: 5px;
		width: 40%;
		height: 0;
		background-color: rgba(196, 196, 196, 0.7);
		backdrop-filter: blur(8px);
		text-align: start;
		transition: 0.5s;
		overflow: hidden;
	}
	.menulist.active {
		height: auto;
	}
	.navbar .nav .menu .menulist li {
		display: block;
	}

	.navbar .nav .menu .menulist li a {
		color: rgb(2, 49, 110);
		opacity: 1;
	}
	.navbar .nav .menu .menulist li a:hover {
		border-radius: 10px;
		background-color: orange;
	}
}
@media (max-width: 500px) {
	.navbar .nav .logotext {
		padding-left: 15px;
	}
}

/* search box section  */
.mainsearchbox {
	position: fixed;
	width: 100%;
	height: 100vh;
	z-index: 100;
	display: none;
}
.searchbox {
	font-family: poppins;
	display: block;
}
.searchbox form {
	margin: 10px auto;
	padding: 20px;
	background-color: rgba(119, 119, 119, 0.425);
	backdrop-filter: blur(10px);
	max-width: 440px;
	min-width: 300px;
	border-radius: 20px;
}
@media (max-width: 450px) {
	.searchbox form {
		margin: 10px;
	}
}
.searchbox form .title {
	display: flex;
	justify-content: center;
	align-items: center;
}
.searchbox form .title label {
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 500;
}
.searchbox form .title select,
option {
	background-color: transparent;
	margin: 20px;
	border: none;
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	font-size: 13px;
	font-weight: 500;
	text-align: end;
}
.searchbox form .search {
	margin: 5px auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.searchbox form .search input {
	border: none;
	border-radius: 15px 0 0 15px;
	background-color: #ffffffb2;
	color: #555;
	padding: 8px 0px 8px 15px;
	outline: none;
}
.searchbox form .search .bi {
	border: none;
	border-radius: 0 15px 15px 0;
	background-color: #ffffffb2;
	color: #555;
	padding: 8px 15px 8px 0px;

	transition: all 0.13s ease-in;
}
</style>

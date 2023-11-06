<template>
	<div class="d-flex justify-content-center p-3 bg-dark">
		<a href="#">
			<img src="../assets/logo.png" alt="Logo" />
		</a>
	</div>
	<nav
		class="navbar navbar-expand-lg bg-dark bg-body-tertiary sticky-top"
		data-bs-theme="dark"
	>
		<div class="container-fluid">
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="bi bi-list"></i>
			</button>
			<router-link class="navbar-brand text-light" :to="{ name: 'Home' }">
				Vue Router
			</router-link>
			<button
				class="navbar-toggler p-1"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#searchBar"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<i class="bi bi-search"></i>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
					<hr />
					<li class="nav-item">
						<router-link
							class="nav-link"
							aria-current="page"
							:to="{ name: 'Home' }"
						>
							Home
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" :to="{ name: 'News' }">
							News
						</router-link>
					</li>

					<li class="nav-item">
						<router-link :to="{ name: 'Contact' }" class="nav-link">
							Contact Us
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'Donate' }" class="nav-link">
							Donate Us
						</router-link>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'About' }" class="nav-link">
							About
						</router-link>
					</li>
				</ul>
			</div>
			<form
				class="collapse navbar-collapse d-sm-none d-md-none classes"
				role="search"
			>
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
			</form>
		</div>

		<div class="collapse" id="searchBar">
			<form class="d-flex navbar-collapse m-3" role="search">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
			</form>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navtitle {
	color: rgb(20, 206, 159);
}
.navtitle:hover {
	color: rgb(10, 151, 116);
}
.navtitle:focus {
	color: rgb(211, 81, 107);
}
button {
	border: none;
}
button:active {
	border: none;
}
</style>

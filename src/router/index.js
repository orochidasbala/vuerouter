import {
	createRouter,
	createWebHistory,
	createWebHashHistory
} from "vue-router";

// import section
import Home from "../views/HomeView.vue";
import News from "../views/NewsView.vue";
import Contact from "../views/ContactView.vue";
import About from "../views/AboutView.vue";
import Read from "../views/ReadView.vue";
import Donate from "../views/DonateView.vue";
import Admin from "../views/AdminPanel.vue";
import AllPosts from "../views/AllPosts.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/news",
		name: "News",
		component: News
	},
	{
		path: "/newsdetail/:id",
		name: "Read",
		component: Read,
		props: true
	},
	{
		path: "/contact",
		name: "Contact",
		component: Contact
	},
	{ path: "/donate", name: "Donate", component: Donate },
	{
		path: "/about",
		name: "About",
		component: About
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: "/controllerpanel",
		name: "Admin",
		component: Admin
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;

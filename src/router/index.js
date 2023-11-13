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
import Admin from "../views/admin/AdminPanel.vue";
import AllPosts from "../components/Admin/AllPosts.vue";
import AddPost from "../components/Admin/AddPost.vue";

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
	},

	// admin panel section
	{
		path: "/controllerpanel", // need to repair
		name: "Admin",
		component: Admin
	},
	{
		path: "/controllerpanel/admin", //ok now
		name: "AllPosts",
		component: AllPosts
	},
	{
		path: "/controllerpanel/addpost", // need to repair
		name: "AddPost",
		component: AddPost
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;

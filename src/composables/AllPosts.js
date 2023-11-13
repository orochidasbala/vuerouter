import { ref } from "vue";

let AllPosts = () => {
	let allposts = ref([]);
	let error = ref("");

	let load = async () => {
		try {
			let res = await fetch("http://localhost:3000/posts/");
			if (res.status === 404) {
				throw new Error("not found url");
			}
			let datas = await res.json();
			allposts.value = datas;
		} catch (err) {
			error.value = err;
		}
	};

	return { allposts, load, error };
};

export default AllPosts;

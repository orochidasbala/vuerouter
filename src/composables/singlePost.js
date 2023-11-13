import { ref } from "vue";

let singlePost = (id) => {
	let post = ref([]);
	let error = ref("");
	// let api = ref();
	let load = async () => {
		try {
			let res = await fetch("http://localhost:3000/posts/" + id);
			if (res.status === 404) {
				throw new Error("not found url");
			}
			let datas = await res.json();
			post.value = datas;
		} catch (err) {
			error.value = err;
		}
	};

	return { post, load, error };
};

export default singlePost;

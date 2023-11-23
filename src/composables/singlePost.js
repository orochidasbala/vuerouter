import { ref } from "vue";

let singlePost = (id) => {
	let post = ref([]);
	let singleerror = ref("");
	// let api = ref();
	let loadsingle = async () => {
		try {
			let res = await fetch("http://localhost:3000/posts/" + id);
			if (res.status === 404) {
				throw new Error("not found url");
			}
			let datas = await res.json();
			post.value = datas;
		} catch (err) {
			singleerror.value = err;
		}
	};

	return { post, loadsingle, singleerror };
};

export default singlePost;

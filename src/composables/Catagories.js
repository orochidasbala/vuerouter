import { ref } from "vue";

let Catagories = () => {
	let catagories = ref([]);
	let error = ref("");
	let load = async () => {
		try {
			let res = await fetch("http://localhost:3000/catagories/");
			if (res.status === 404) {
				throw new Error("not found url");
			}
			let datas = await res.json();
			catagories.value = datas;
		} catch (err) {
			error.value = err;
		}
	};

	return { catagories, load, error };
};

export default Catagories;

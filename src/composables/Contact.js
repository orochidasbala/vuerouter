import { ref } from "vue";

let allcontacts = () => {
	let contacts = ref([]);
	let error = ref("");
	let load = async () => {
		try {
			let res = await fetch("http://localhost:3000/contacts/");
			if (res.status === 404) {
				throw new Error("not found url");
			}
			let datas = await res.json();
			contacts.value = datas;
		} catch (err) {
			error.value = err;
		}
	};

	return { contacts, load, error };
};

export default allcontacts;

import { ref } from "vue";

let Payments = () => {
	let payments = ref([]);
	let error = ref("");
	let load = async () => {
		try {
			let res = await fetch("http://localhost:3000/payments/");
			if (res.status === 404) {
				throw new Error("not found url");
			}
			let datas = await res.json();
			payments.value = datas;
		} catch (err) {
			error.value = err;
		}
	};

	return { payments, load, error };
};

export default Payments;

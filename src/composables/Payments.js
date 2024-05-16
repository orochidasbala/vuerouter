import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { ref } from "vue";

let Payments = () => {
	let payments = ref([]);
	let error = ref("");
	let load = async () => {
		try {
			const method = await getDocs(collection(db, "payments"));
			payments.value = method.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
		} catch (err) {
			error.value = err;
		}
	};

	return { payments, load, error };
};

export default Payments;

import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { ref } from "vue";

let allcontacts = () => {
	let contacts = ref([]);
	let error = ref("");
	let load = async () => {
		try {
			const querySnap = await getDocs(collection(db, "contacts"));
			contacts.value = querySnap.docs.map((e) => {
				return { id: e.id, ...e.data() };
			});
		} catch (err) {
			error.value = err;
		}
	};

	return { contacts, load, error };
};

export default allcontacts;

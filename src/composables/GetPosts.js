import { computed, ref } from "vue";
import { db } from "../firebase/config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";

let GetPosts = () => {
	let allposts = ref([]);
	let error = ref("");
	let load = async () => {
		try {
			const querySnapShot = await getDocs(collection(db, "post"));
			allposts.value = querySnapShot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
		} catch (err) {
			error.value = err;
		}
	};

	return { allposts, load, error };
};

export default GetPosts;

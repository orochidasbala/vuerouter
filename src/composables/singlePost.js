import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore/lite";
import { ref } from "vue";

let singlePost = (id) => {
	let post = ref([]);
	let singleerror = ref("");
	let loadsingle = async () => {
		try {
			const docSnap = await getDoc(doc(db, "posts", id));
			post.value = docSnap.data();
		} catch (err) {
			singleerror.value = err;
		}
	};

	return { post, loadsingle, singleerror };
};

export default singlePost;

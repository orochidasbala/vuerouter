<template>
	<div class="container py-3 px-5">
		<div class="text-center">
			<span class="fs-4">About</span>

			<p class="p-2">
				<!-- Hello, my name is Mr. Gnuak. I am 24 years old. I was living for
				1999-2023 in Tanintharyi Township. At Feb 27, 2023, I accessed
				to Tanintharyi Defence Force (TDF) and I was became a Drone
				Researcher -->
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
				aperiam commodi voluptatibus. Dolore nam praesentium ipsam
				officiis magnam modi atque repellat inventore adipisci sunt.
				Enim modi at expedita beatae ipsam!
			</p>
		</div>
		<div class="text-center">
			<span class="fs-4">Contact</span>

			<div class="my-3">
				<span class="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis molestiae nobis veniam. Reiciendis dicta iusto
					porro molestias quisquam laudantium mollitia rem aliquam
					vitae necessitatibus incidunt, totam aliquid vero et
					eligendi?
				</span>
			</div>
			<div v-for="contact in contacts" :key="contact.id">
				<DescriptionBox :contact="contact" />
			</div>
		</div>
	</div>
</template>

<script>
import DescriptionBox from "@/components/DescriptionBox.vue";
import allcontacts from "@/composables/Contact";
import { ref } from "vue";
export default {
	components: {
		DescriptionBox
	},
	setup() {
		let { contacts, load, error } = allcontacts();
		load();
		return { contacts, error };
	}
};
</script>

<style scoped>
.container {
	max-width: 1000px;
}

.container .text-center .fs-4 {
	color: rgb(2, 49, 110);
	font-family: poppins;
}
</style>

<template>
	<div class="container py-3 px-5">
		<div class="text-center">
			<span class="fs-4">About</span>

			<p class="p-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
				nulla consequatur modi quibusdam incidunt omnis sapiente nisi
				quod facilis veniam perferendis, natus assumenda ipsam iure in
				cupiditate provident. Dolores, nemo! Lorem ipsum dolor sit amet
				consectetur adipisicing elit. At id ullam nihil quas iste
				corporis vero suscipit voluptates facilis atque laborum porro
				quidem deleniti aperiam nisi doloremque, hic cumque. Eligendi,
				aut! Possimus laudantium, sed, illo corporis dignissimos quod
				fugiat aliquid id?
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

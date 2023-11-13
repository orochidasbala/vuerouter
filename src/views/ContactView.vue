<template>
	<div class="container p-3">
		<div class="row">
			<!-- main contents section -->
			<div class="text-center">
				<span class="hd text-primary fs-4">Contact Us</span>

				<p class="p-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Minus nulla consequatur modi quibusdam incidunt omnis
					sapiente nisi quod facilis veniam perferendis, natus
					assumenda ipsam iure in cupiditate provident. Dolores, nemo!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At
					id ullam nihil quas iste corporis vero suscipit voluptates
					facilis atque laborum porro quidem deleniti aperiam nisi
					doloremque, hic cumque. Eligendi, aut! Possimus laudantium,
					sed, illo corporis dignissimos quod fugiat aliquid id?
				</p>
				<h3 class="text-start p-3">Contact addresses</h3>
				<div v-for="contact in contacts" :key="contact.id">
					<DescriptionBox :contact="contact" />
				</div>
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

<style scoped></style>

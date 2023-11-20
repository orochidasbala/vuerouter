<template>
	<div class="container px-5 py-3">
		<div class="text-center">
			<span class="fs-4">Donate Us</span>

			<p class="content p-2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Blanditiis itaque, iure, quae iusto explicabo maxime illum
				veniam non, autem ullam cupiditate sint quod magni adipisci
				porro reiciendis maiores sapiente provident illo? Sit porro
				velit ipsum? Suscipit rerum repudiandae minus voluptas? Nihil
				delectus ex, sint quasi voluptatem velit aut est porro deserunt
				totam cum, eligendi tenetur temporibus, aliquid vel veniam
				itaque excepturi reprehenderit commodi. Sit quaerat rem
				perspiciatis nesciunt architecto repudiandae blanditiis
				accusantium ipsum quibusdam, rerum voluptas cumque corporis,
				numquam
			</p>

			<div v-for="payment in payments" :key="payment.id">
				<DescriptionBox :payment="payment" />
			</div>
			<div class="text-start p-3">
				<span>
					<code>Note : : </code>အကယ်၍ အခက်အခဲတစ်စုံတစ်ရာ ဖြစ်ခဲ့ပါက
					<router-link :to="{ name: 'About' }"
						>About Page</router-link
					>
					တွင် ဖော်ပြထားသော Facebook Page ၏ Chatbox မှတဆင့်
					ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import DescriptionBox from "@/components/DescriptionBox.vue";
import Payments from "@/composables/Payments";
import { ref } from "vue";

export default {
	components: {
		DescriptionBox
	},
	setup() {
		let { payments, load, error } = Payments();

		load();
		return { payments, error };
	}
};
</script>

<style scoped>
.container {
	max-width: 1000px;
}
.container .text-center .fs-4 {
	font-family: poppins;
	color: rgb(2, 49, 110);
}
a {
	text-decoration: none;
	color: rgb(2, 49, 110);
}
</style>

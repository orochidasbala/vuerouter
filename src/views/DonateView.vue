<template>
	<div class="container px-5 py-3">
		<div class="text-center">
			<span class="fs-4">Donate Us</span>

			<p class="content p-2">
				ကျနော်ကတော့ ဒရုန်းလက်ရုံးတပ်ဖွဲ့ဝင်တစ်ယောက်ပဲဖြစ်ပါတယ်။
				ကျနော့်ရဲ့ဝါသနာအရ ဒီတပ်ဖွဲ့ထဲကိုဝင်လာခဲ့တာပါ။
				နောက်ထပ်အရည်ချင်းပြည့်ဝတဲ့ ဒရုန်းတပ်သားတွေ များပြားလာပြီး
				စစ်ရေးအရှိန်ဟုန်မြင့်စွာ ဆောင်ရွက်နိုင်ဖို့ ကြိုးစား
				ဆောင်ရွက်လျက်ရှိပါတယ်။ သင်တန်းသင်ကြားစဉ်ကာလများ
				သင်တန်းပြီးမြောက်ပြီး တိုက်ခိုက်ရေးများဆောင်ရွက်တဲ့ အခါများမှာ
				လိုအပ်တဲ့ ပစ္စည်းများဝယ်ယူဖြည့်တင်းနိုင်ဖို့အတွက်
				ငွေကြေးလိုအပ်မှု အခက်အခဲကြောင့် ထင်သလောက်ခရီးမရောက်နိုင်ပဲ
				နှောင့်နှေးကြန့်ကြာမှုများဖြစ်နေရပါတယ်။ မိဘပြည်သူများအနေနဲ့လည်း
				ခုလိုခေတ်ကာလမျိုးမှာ
				အလုပ်အကိုင်စားဝတ်နေရေးခက်ခဲမှုများရှိနေတာကို ကျနော်တို့
				နားလည်သဘောပေါက်ပါတယ်။ သို့ပေမဲ့လည်း ဒီလို အခြေနေမျိုးတေကနေ
				လွတ်မြောက်နိုင်ဖို့က အားလုံးလက်တွဲညီညီ ကူညီပါဝင်ပေးကြမှပဲ
				တော်လှန်ရေးက မြန်မြန်ဆန်ဆန် အောင်မြင်ရမာဖြစ်တာကြောင့်
				လူကြီးမင်းတို့အနေနဲ့ နည်းသည်ဖြစ်စေများသည်ဖြစ်စေ ပါဝင်လှူဒါန်း
				ပေးကြဖို့ တိုက်တွန်းချင်ပါတယ်။ ဒီလိုမျိုး တက်နိုင်တဲ့ဖက်က
				ပါဝင်ပေးကြမယ်ဆိုရင် ကျနော်တို့အနေနဲ့လည်း ရှေ့ဆက်ဖို့
				ခွန်အားများရှိလာမှာဖြစ်ပြီး မအလ ကို အမြစ်ဖြတ်ဖို့ များစွာ
				အထောက်အကူဖြစ်မာမို့
				တတ်နိုင်သလောက်ပါဝင်လှူဒါန်းပေးကြပါခင်များ.......
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

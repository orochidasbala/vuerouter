<template>
	<div class="container">
		<span class="hdtext">Donate Us</span>

		<!-- <p>
			ကျနော်ကတော့ ဒရုန်းလက်ရုံးတပ်ဖွဲ့ဝင်တစ်ယောက်ပဲဖြစ်ပါတယ်။
			ကျနော့်ရဲ့ဝါသနာအရ ဒီတပ်ဖွဲ့ထဲကိုဝင်လာခဲ့တာပါ။
			နောက်ထပ်အရည်ချင်းပြည့်ဝတဲ့ ဒရုန်းတပ်သားတွေ များပြားလာပြီး
			စစ်ရေးအရှိန်ဟုန်မြင့်စွာ ဆောင်ရွက်နိုင်ဖို့ ကြိုးစား
			ဆောင်ရွက်လျက်ရှိပါတယ်။ သင်တန်းသင်ကြားစဉ်ကာလများ
			သင်တန်းပြီးမြောက်ပြီး တိုက်ခိုက်ရေးများဆောင်ရွက်တဲ့ အခါများမှာ
			လိုအပ်တဲ့ ပစ္စည်းများဝယ်ယူဖြည့်တင်းနိုင်ဖို့အတွက် ငွေကြေးလိုအပ်မှု
			အခက်အခဲကြောင့် ထင်သလောက်ခရီးမရောက်နိုင်ပဲ
			နှောင့်နှေးကြန့်ကြာမှုများဖြစ်နေရပါတယ်။ မိဘပြည်သူများအနေနဲ့လည်း
			ခုလိုခေတ်ကာလမျိုးမှာ အလုပ်အကိုင်စားဝတ်နေရေးခက်ခဲမှုများရှိနေတာကို
			ကျနော်တို့ နားလည်သဘောပေါက်ပါတယ်။ သို့ပေမဲ့လည်း ဒီလို
			အခြေနေမျိုးတေကနေ လွတ်မြောက်နိုင်ဖို့က အားလုံးလက်တွဲညီညီ
			ကူညီပါဝင်ပေးကြမှပဲ တော်လှန်ရေးက မြန်မြန်ဆန်ဆန်
			အောင်မြင်ရမာဖြစ်တာကြောင့် လူကြီးမင်းတို့အနေနဲ့
			နည်းသည်ဖြစ်စေများသည်ဖြစ်စေ ပါဝင်လှူဒါန်း ပေးကြဖို့
			တိုက်တွန်းချင်ပါတယ်။ ဒီလိုမျိုး တက်နိုင်တဲ့ဖက်က ပါဝင်ပေးကြမယ်ဆိုရင်
			ကျနော်တို့အနေနဲ့လည်း ရှေ့ဆက်ဖို့ ခွန်အားများရှိလာမှာဖြစ်ပြီး မအလ ကို
			အမြစ်ဖြတ်ဖို့ များစွာ အထောက်အကူဖြစ်မာမို့
			တတ်နိုင်သလောက်ပါဝင်လှူဒါန်းပေးကြပါခင်များ.......
		</p> -->
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
			corporis praesentium dicta amet facere reprehenderit doloribus iure,
			assumenda ad, nostrum labore non deleniti ratione fuga aperiam
			consectetur soluta asperiores et animi voluptas at aspernatur? Ipsam
			ullam dolor hic impedit officia libero exercitationem nisi fuga
			magni! Quo dolore tempora esse ullam numquam sequi necessitatibus
			laboriosam. Blanditiis autem nihil vero doloribus commodi, facilis
			deserunt esse debitis, harum rerum quibusdam! Voluptates fugit est,
			nulla repellat vero eveniet! Repellendus, enim nobis libero, aperiam
			quos accusantium facere non quis esse dolores autem quas veritatis,
			saepe explicabo iure. Explicabo recusandae error natus vero minus
			doloribus fuga! Assumenda corporis laborum labore, quisquam aperiam
			esse dignissimos rerum, recusandae aspernatur porro, ad dolorem
			beatae placeat deleniti. Quam at sed cum consequuntur laborum
			quisquam officia quo id, laboriosam illum iste rerum, dolorem soluta
			molestias quibusdam porro adipisci amet autem. Necessitatibus autem
			quam doloremque repellendus, molestias sit placeat minima? Dolores,
			distinctio ipsam quas aliqui cumque, at earum harum quae! Harum
			excepturi dolore corrupti officia.
		</p>
		<hr />
		<span class="payby">Payment methods</span>
		<div v-if="payments.length > 0">
			<div v-for="payment in payments" :key="payment.id">
				<DescriptionBox :payment="payment" />
			</div>
		</div>
		<div v-else>
			<Spinner />
		</div>
		<div class="note">
			<code>Note : : </code>အကယ်၍ အခက်အခဲတစ်စုံတစ်ရာ ဖြစ်ခဲ့ပါက
			<router-link :to="{ name: 'About' }">ဤနေရာတွင်</router-link>
			တွင် ဖော်ပြထားသော Facebook Page ၏ Chatbox မှတဆင့်
			ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။
		</div>
	</div>
</template>

<script>
import DescriptionBox from "@/components/DescriptionBox.vue";
import Payments from "@/composables/Payments";
import { ref } from "vue";
import Spinner from "@/components/Spinner.vue";

export default {
	components: {
		DescriptionBox,
		Spinner
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
	padding: 30px;
	font-size: 1.3em;
	color: #fff;
}
.container .hdtext {
	font-size: 1.5em;
	font-variant-caps: small-caps;
	font-weight: 700;
}
.payby {
	font-size: 1.2em;
	text-decoration-line: underline;
	color: #eee;
	margin-bottom: 30px;
	display: block;
	font-variant-caps: small-caps;
}
.container p {
	margin-bottom: 20px;
	margin-top: 20px;
	text-align: justify;
}
.container p::first-letter {
	color: red;
	font-size: 1.3em;
	font-weight: bold;
}
.note {
	margin-top: 30px;
	text-align: justify;
	font-size: 0.9em;
}
code {
	color: #eee;
	font-size: 1.2em;
}
.note a {
	text-decoration: none;
	color: rgb(255, 193, 77);
}
</style>

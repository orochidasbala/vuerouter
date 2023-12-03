<template>
	<footer class="bg-dark">
		<div class="footer">
			<div class="upside row">
				<div class="content col-lg-6 col-md-7 col-sm-12 my-2">
					<span class="header">Descriptions</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus odio, sed eius iste dolorum, aliquid explicabo
						magni, ex tenetur accusamus exercitationem laboriosam!
						Veritatis saepe aperiam voluptatibus at asperiores neque
						est et alias pariatur eum explicabo vero amet
						distinctio, quibusdam earum minus porro corrupti vitae
						aut consequuntur quia. Et, consequatur? Totam.
					</p>
				</div>
				<!-- <div class="feedback col-lg-3 col-md-5 col-sm-12 my-2">
					<span class="info"> Subscription </span>
					<input
						type="email"
						placeholder="example@email.com"
					/><button type="submit">Subscribe</button>
				</div> -->
				<div class="follow col-lg-2 col-md-4 col-sm-5 my-2">
					<span class="followitem">Follow Us for more news</span>
					<ul>
						<li>
							<a href="https://infosecscout.com/"
								><i class="bi bi-facebook"></i>
								<span>Facebook</span></a
							>
						</li>
						<li>
							<a href="https://github.com/">
								<i class="bi bi-whatsapp"></i>
								<span>Whatsapp</span>
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/watch?v=9n0u3IbGT0M"
							>
								<i class="bi bi-youtube"></i>
								<span>YouTube</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="contact col-lg-2 col-md-5 col-sm-5 my-2">
					<span class="call">Call us</span>
					<span class="number"
						><i class="bi bi-telephone-forward"></i>
						+959771220847</span
					>
				</div>
			</div>
			<div class="downside">
				<hr />
				<span class="copyright">Copyright 20231511</span>
				<span class="note"
					>Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Natus adipisci unde ex.</span
				>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style scoped>
hr {
	width: 95%;
}
.footer {
	font-family: poppins;
	background-color: rgb(0, 27, 63);
	width: 100%;
	color: #eee;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}
.upside {
	width: 95%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	padding: 30px;
}
.upside .content .header {
	font-weight: 500;
	font-size: 25px;
}
.upside .content p {
	font-size: 14px;
	text-align: justify;
}
/* .upside .feedback .info {
	color: orange;
	font-size: 20px;
	font-weight: 500;
	text-transform: uppercase;
}
.upside .feedback input {
	border: none;
	border-radius: 7px;
	background-color: rgba(206, 206, 206, 0.397);
	width: 100%;
	padding: 10px 15px;
	font-size: 14px;
	outline: none;
	margin: 10px 0;
	color: #fff;
}
.upside .feedback button {
	border: none;
	border-radius: 7px;
	background-color: orange;
	padding: 8px 15px;
	font-size: 14px;
	outline: none;
	color: #fff;
	transition: all 0.3s ease;
}
.upside .feedback button:hover {
	transform: scale(0.98);
} */
.upside .follow {
	display: flex;
	flex-direction: column;
}
.upside .follow .followitem {
	color: #fff;
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 10px;
}
.upside .follow ul {
	display: flex;
	flex-direction: column;
	padding: 0;
}
.upside .follow ul li {
	cursor: pointer;
	list-style: none;
	margin: 5px 2px;
	font-size: 15px;
	font-weight: 500;
}
.upside .follow ul li a span {
	margin: 0 10px;
	font-size: 15px;
	font-weight: 500;
}
.upside .follow ul li a {
	text-decoration: none;
	color: #fff;
}
.upside .contact .call {
	display: block;
	color: #fff;
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 10px;
}
.upside .contact .number {
	display: block;
	color: #fff;
	text-transform: uppercase;
	font-weight: 500;
	background-color: rgba(206, 206, 206, 0.397);
	padding: 8px 15px;
	border-radius: 5px;
	color: #fff;
	width: fit-content;
}
.upside .contact .number .bi {
	font-size: 15px;
	margin-right: 10px;
}
.downside {
	width: 95%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
}
.downside .copyright {
	font-size: 14px;
	color: rgba(255, 255, 255, 0.685);
}
.downside .note {
	margin: 20px auto;
	font-size: 10px;
	color: #535353;
	text-align: center;
}
</style>

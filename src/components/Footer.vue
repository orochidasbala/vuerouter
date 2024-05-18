<template>
	<hr />
	<footer>
		<div class="footer">
			<div class="upside">
				<div class="content">
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
				<div class="follow">
					<span class="item">Follow on social</span>

					<li>
						<a
							href="https://www.facebook.com/profile.php?id=61553870197254&mibextid=ZbWKwL"
							><i class="bi bi-facebook"></i>
							<span>Facebook</span></a
						>
					</li>
					<li>
						<a href="https://wa.link/gnmo75">
							<i class="bi bi-whatsapp"></i>
							<span>Whatsapp</span>
						</a>
					</li>
					<li>
						<a
							href="https://youtube.com/@codinglife9767?si=wcLn69yaQ3EnfGmE"
						>
							<i class="bi bi-youtube"></i>
							<span>YouTube</span>
						</a>
					</li>
				</div>
				<div class="contact">
					<span class="call">Call us</span>
					<span class="number"
						><i class="bi bi-envelope"></i>
						drasquad.tni@gmail.com</span
					>
					<span class="number"
						><i class="bi bi-telephone-forward"></i>
						+959404627250</span
					>
				</div>
			</div>
			<hr />
			<div class="downside">
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
	color: #fff;
}
footer > hr {
	width: 90%;
	align-self: center;
}
.footer {
	font-family: poppins;
	width: 100%;
	color: #eee;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: transparent;
}
.upside {
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 30px;
}
.upside .content {
	width: calc(100% - 540px);
	padding: 10px;
}

.content p {
	margin-top: 20px;
	font-size: 1em;
	text-align: left;
}

.upside .follow,
.contact {
	width: 270px;
	padding: 10px;
}
.header,
.item,
.call {
	margin-bottom: 200px;
	color: orange;
	font-size: 1.5em;
	font-weight: 500;
	margin-bottom: 10px;
}
.follow li {
	cursor: pointer;
	list-style: none;
	margin: 15px 2px;
	font-size: 15px;
	font-weight: 500;
}
.follow li a span {
	margin: 0 10px;
	font-size: 15px;
	font-weight: 500;
}
.follow li a {
	text-decoration: none;
	color: #fff;
}

.contact .number {
	display: block;
	font-size: 0.9em;
	margin-bottom: 5px;
	text-transform: lowercase;
	font-weight: 300;
	background-color: rgba(206, 206, 206, 0.397);
	padding: 8px 15px;
	border-radius: 5px;
	color: #fff;
	width: fit-content;
	margin: 15px 2px;
}
.number .bi {
	font-size: 15px;
	margin-right: 10px;
}

/* copyright */
.downside {
	width: 95%;
	/* display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center; */
	padding: 10px;
	text-align: center;
}
.downside .copyright {
	display: block;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.685);
}
.downside .note {
	margin: 20px auto;
	font-size: 10px;
	color: #fff;
	text-align: center;
}

/* @media (max-width: 780px) */

@media (max-width: 900px) {
	.upside .content {
		min-width: 100%;
		padding: 10px;
	}
}
@media (max-width: 500px) {
	.upside .follow,
	.contact {
		min-width: 500px;
	}
}
</style>

<template>
	<!-- <div class="sideview">
		<h1>Member Form</h1>
		<hr />
		<form action="">
			<label for="name">Name</label>
			<input
				type="text"
				name="name"
				placeholder="Real name or Nickname"
			/>

			<label for="username">Username</label>
			<input type="text" name="username" placeholder="username" />

			<div class="agender">
				<div class="age">
					<label for="age">Age</label>
					<input
						type="number"
						name="age"
						placeholder="how old are you?"
					/>
				</div>
				<div class="gender">
					<label for="gender">Choose Gender</label>
					<select name="gender">
						<option>select...</option>
						<option value="female">Female</option>
						<option value="male">Male</option>
						<option value="non-binary">Non-Binary</option>
						<option value="other">Other</option>
						<option value="Prefer not to answer">
							Perfer not to Answer
						</option>
					</select>
				</div>
			</div>
			<label for="force">Choose Force</label>
			<select name="force">
				<option>select...</option>
				<option value="dsquad">Dragon Squad Tni</option>
				<option value="federalwing">Fereral Wing</option>
				<option value="t1pdf">T1 - PDF</option>
				<option value="t2pdf">T2 - PDF</option>
				<option value="t3pdf">T3 - PDF</option>
				<option value="t4pdf">T4 - PDF</option>
				<option value="knu">KNU</option>
				<option value="KNLA">KNLA</option>
				<option value="other">Other</option>
				<option value="Prefer not to answer">
					Perfer not to Answer
				</option>
			</select>

			<label for="contact">Email or Phone</label>
			<input type="text" name="contact" placeholder="example@gmail.com" />

			<textarea
				name="bio"
				rows="4"
				placeholder="Say something"
			></textarea>
			<hr />
			<button>Submit</button>
		</form>
	</div> -->
	<h1>
		{{ posts }}
	</h1>
</template>

<script>
export default {
	props: ["posts"],
	setup(props) {}
};
</script>

<style>
/* member form */

.sideview {
	display: none;
	max-width: 500px;
	height: auto;
	margin: 30px 0;
	border-radius: 20px;
	font-size: 1em;
	box-shadow: 1px 1px 5px #000000ab, -1px -1px 5px #fff;
	padding: 10px;
}
@media (max-width: 1200px) {
	.sideview {
		margin-left: 25px;
	}
}
.sideview h1 {
	font-size: 2.2em;
	text-align: center;
	color: #fff;
	text-transform: uppercase;
	margin: 25px;
}
.sideview hr {
	color: #fff;
}

.sideview form {
	margin: 20px;
}
.sideview form label {
	color: #fff;
	display: block;
	margin: 10px 0 5px;
}
.sideview form input,
textarea,
select {
	width: 100%;
	background-color: #ffffff93;
	padding: 5px 10px;
	border: none;
	border-radius: 10px;
	outline-color: #fff;
	font-size: 1em;
}
.sideview form .agender {
	display: flex;
	flex-direction: row;
	gap: 10px;
}
textarea {
	margin-top: 15px;
}
button {
	cursor: pointer;
	background-color: #fff;
	width: 100%;
	padding: 10px;
	font-size: 1.3em;
	border: none;
	border-radius: 15px;
}
</style>

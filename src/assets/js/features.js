function fetchallpost(api, alldatas) {
	fetch(api)
		.then((response) => {
			return response.json;
		})
		.then((datas) => {
			alldatas = datas;
		})
		.catch((err) => {
			console.log(err);
		});
}

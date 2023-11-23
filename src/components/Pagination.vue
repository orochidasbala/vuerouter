<template>
	<Pagination v-model="page" :record="500" @paginate="myCallback" />
</template>

<script>
import Pagination from "../../node_modules/vue-pagination-2/dist/vue-pagination-2.min.js";
import Vue from "";

export default {
	components: {
		Pagination
	},
	data: {
		page: 1,
		perPage: 20,
		records: [],
		recordsLength: 0
	},
	methods: {
		getPage: function (page) {
			// we simulate an api call that fetch the records from a backend
			this.records = [];
			const startIndex = this.perPage * (page - 1) + 1;
			const endIndex = startIndex + this.perPage - 1;
			for (let i = startIndex; i <= endIndex; i++) {
				this.records.push(`Item ${i}`);
			}
		},
		getRecordsLength() {
			// here we simulate an api call that returns the records length
			this.recordsLength = 500;
		}
	},
	created() {
		this.getRecordsLength();
		this.getPage(this.page);
	}
};
</script>

<style></style>

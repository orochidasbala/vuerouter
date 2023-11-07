<template>
	<div class="container-fluid">
		<Dashboard />
	</div>
	<!-- <Create /> -->
</template>

<script>
import Create from "@/components/Admin/Create.vue";
import Dashboard from "@/components/Admin/Dashboard.vue";
export default {
	components: {
		Create,
		Dashboard
	}
};
</script>

<style scoped></style>

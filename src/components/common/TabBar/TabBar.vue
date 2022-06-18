<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'tabbar',
}
</script>

<style>
.tabbar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #f6f6f6;
	display: flex;
	box-shadow: 0px -3px 0.75px rgba(242, 242, 242);
}
</style>

<template>
	<div class="listitem">
		<div class="icon" @click="showtoast">
			<slot name="icon"></slot>
		</div>
		<div class="text" @click="showtoast">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ListItem',
	methods: {
		showtoast() {
			this.$mytoast.show('请先登录', 2000)
		},
	},
}
</script>

<style scoped>
.listitem {
	display: flex;
	height: 40px;
}
.icon {
	width: 50px;
	padding-left: 10px;
	padding-top: 4px;
}
.icon img {
	height: 70%;
}
.text {
	line-height: 30px;
	flex: 1;
}
.text div {
	border-bottom: 2px solid rgba(242, 242, 242);
}
</style>

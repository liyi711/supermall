<template>
	<div class="toast" v-show="isShow">
		<div>{{ message }}</div>
	</div>
</template>

<script>
export default {
	name: 'Toast',
	data() {
		return {
			message: '',
			isShow: false,
		}
	},
	methods: {
		show(message, deration) {
			this.isShow = true
			this.message = message
			setTimeout(() => {
				this.message = ''
				this.isShow = false
			}, deration)
		},
	},
}
</script>

<style scoped>
.toast {
	top: 50%;
	left: 50%;
	position: fixed;
	padding: 8px 10px;
	color: #fff;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 999;
	border-radius: 4px;
}
</style>

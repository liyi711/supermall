<template>
	<div class="tabbar-item" @click="itemclick">
		<div v-if="!isActive">
			<slot name="tabbar-icon"></slot>
		</div>
		<div v-else>
			<slot name="tabbar-icon-active"></slot>
		</div>
		<div :style="isActiveColor">
			<slot name="tabbar-text"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TabBarItem',
	props: {
		path: String,
		activeColor: {
			type: String,
			default: 'red',
		},
	},
	methods: {
		itemclick() {
			this.$router.replace(this.path)
		},
	},
	computed: {
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1
		},
		isActiveColor() {
			return this.isActive ? { color: this.activeColor } : {}
		},
	},
}
</script>

<style>
.tabbar-item {
	height: 49px;
	text-align: center;
	flex: 1;
	font-style: 12px;
}

.tabbar-item img {
	width: 24px;
	height: 24px;
	margin-top: 3px;
	vertical-align: middle;
}
</style>

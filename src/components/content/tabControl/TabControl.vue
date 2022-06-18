<template>
	<div class="tabcontrol">
		<div
			class="tabcontrol-item"
			v-for="(item, index) in title"
			:class="{ active: index === activeindex }"
			@click="itemclick(index)"
		>
			<span>{{ item }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TabControl',
	data() {
		return {
			activeindex: 0,
		}
	},
	methods: {
		itemclick(index) {
			this.activeindex = index
			this.$emit('tabClick', index)
		},
	},
	props: {
		title: {
			type: Array,
			default() {
				return {}
			},
		},
	},
}
</script>
<style>
.tabcontrol {
	display: flex;
	text-align: center;
	background-color: #fff;
}
.tabcontrol-item {
	flex: 1;
	height: 44px;
	line-height: 44px;
}
.tabcontrol span {
	padding: 5px;
}
.active {
	/* color: var(--color-high-text); */
	color: rgba(255, 76, 5);
}
.active span {
	border-bottom: 3px solid rgba(255, 76, 5);
}
</style>

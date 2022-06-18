<template>
	<nav-bar>
		<div slot="left">
			<img
				src="~assets/img/common/back.svg"
				alt=""
				class="back"
				@click="back"
			/>
		</div>
		<div slot="center" class="detailNavBar">
			<div
				v-for="(item, index) in titles"
				class="detailItem"
				:class="{ active: index === currentIndex }"
				@click="itemClick(index)"
			>
				<span>{{ item }}</span>
			</div>
		</div>
	</nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
	name: 'DetailNavBar',
	components: {
		NavBar,
	},
	data() {
		return {
			titles: ['商品', '参数', '评论', '推荐'],
			currentIndex: 0,
		}
	},
	methods: {
		itemClick(index) {
			this.currentIndex = index
			this.$emit('itemClick', index)
		},
		back() {
			this.$router.back()
		},
	},
}
</script>

<style scoped>
.detailNavBar {
	display: flex;
}
.detailItem {
	flex: 1;
}
.active {
	/* color: var(--color-high-text); */
	color: rgba(255, 76, 5);
}
.active span {
	padding: 5px;

	border-bottom: 2px solid rgba(255, 76, 5);
}
.back {
	margin-top: 10px;
}
</style>

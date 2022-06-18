<template>
	<div class="sliderBar">
		<scroll class="content">
			<template v-for="(item, index) in slideBarList">
				<div
					:class="{ active: index === currentIndex }"
					:key="index"
					@click="slideBarItemClick(item, index)"
					class="slider-item"
				>
					{{ item.title }}
				</div>
			</template>
		</scroll>
	</div>
</template>

<script>
// import Scroll from 'components/common/Scroll/Scroll.vue'
import Scroll from 'components/common/srcoll/Scroll.vue'
export default {
	components: { Scroll },
	name: 'sliderBar',
	data() {
		return {
			currentIndex: 0,
		}
	},
	props: {
		slideBarList: {
			type: Array,
			default() {
				return []
			},
		},
	},
	methods: {
		slideBarItemClick(item, index) {
			this.currentIndex = index
			this.$emit('slideBarItemClick', index)
		},
	},
}
</script>

<style scoped>
.sliderBar {
	width: 85px;
	position: fixed;
	left: 0;
	top: 44px;
	bottom: 49px;
	background-color: #f6f6f6;
}
.slider-item {
	width: 100%;
	height: 40px;
	text-align: center;
	line-height: 40px;
	font-size: 18px;
}
.active {
	font-weight: 700;
	color: var(--color-high-text);
	background-color: #ffffff;
	border-left: 3px solid var(--color-high-text);
}
.content {
	height: calc(100vh - 93px);
	overflow: hidden;
}
</style>

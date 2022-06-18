<template>
	<div class="category-goods" v-if="Object.keys(categoryDetail).length !== 0">
		<a
			class="category-good-item"
			v-for="(item, index) in categoryDetail"
			:key="index"
			:href="item.link"
		>
			<span class="detail-img"
				><img :src="item.image" alt="" @load="goodsImgLoad"
			/></span>
			<span class="detail-font">{{ item.title }}</span>
		</a>
	</div>
</template>

<script>
import Scroll from 'components/common/srcoll/Scroll.vue'
export default {
	components: { Scroll },
	name: 'categoryGoods',
	props: {
		categoryDetail: {
			type: Array,
			default() {
				return []
			},
		},
	},
	methods: {
		goodsImgLoad() {
			this.$emit('goodsImgLoad')
		},
	},
}
</script>

<style scoped>
.category-goods {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 6px;
}
.category-good-item {
	width: 33%;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.category-good-item .detail-img {
	width: 65px;
}
.detail-img img {
	width: 100%;
	padding: 5px;
}
.detail-font {
	font-size: 8px;
}
.content {
	height: calc(100vh - 93px);
	width: 100%;
}
</style>

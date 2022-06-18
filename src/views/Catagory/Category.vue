<template>
	<div>
		<category-nav-bar></category-nav-bar>
		<slider-bar
			:slideBarList="categoryList"
			@slideBarItemClick="slideBarItemClick"
		>
		</slider-bar>
		<tab-control
			:title="tabControlTitle"
			@tabClick="tabClick"
			ref="tabControl1"
			v-show="isStatic"
			class="static"
		></tab-control>
		<scroll
			class="content"
			:probeType="3"
			:pull-up-load="true"
			@scroll="backTopScroll"
			ref="scroll"
		>
			<category-goods
				:categoryDetail="currentList"
				@goodsImgLoad="goodsImgLoad"
			></category-goods>
			<tab-control
				:title="tabControlTitle"
				@tabClick="tabClick"
				ref="tabControl"
				:class="{ staticTop: isStatic }"
			></tab-control>
			<good-list :List="tpyeData" class="goods-font"></good-list>
		</scroll>
	</div>
</template>

<script>
import categoryNavBar from './children/categoryNavBar.vue'
import SliderBar from './children/silderBar.vue'
import { debounce } from 'common/utils.js'
//请求相关方法引入
import {
	getgetCategory,
	getSubcategory,
	getCategoryDetail,
} from 'network/category.js'
import CategoryGoods from './children/categoryGoods.vue'
import Scroll from 'components/common/srcoll/Scroll.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodList from 'components/content/goods/GoodsList.vue'
export default {
	name: 'Category',
	components: {
		categoryNavBar,
		SliderBar,
		CategoryGoods,
		Scroll,
		TabControl,
		GoodList,
	},
	data() {
		return {
			//分类信息
			categoryList: [],
			//当前渲染页面的数据
			currentList: [],
			//给tabControl传数据
			tabControlTitle: ['流行', '新款', '精品'],
			//拿到当前所处分类，以便后面根据分类拿到type数据
			currentIndex: 0,
			//储存一下tabcontrol类型，拿到不同tabControl索引请求不同数据
			typeStyle: ['pop', 'new', 'sell'],
			typeIndex: 0,
			//type数据
			tpyeData: [],
			//控件距离顶部高度
			tabControlTop: null,
			//用来存防抖函数
			countTop: null,
			//控制吸顶类是否运用
			isStatic: false,
		}
	},
	created() {
		this.getgetCategory()
	},
	methods: {
		//scroll中触发pullingUp时触发

		getgetCategory() {
			//先获取分类信息
			getgetCategory().then(res => {
				//获取第一个正在流行的数据进行渲染
				this.categoryList = res.data.data.category.list
				this.getSubcategory(0)
				this.getCategoryDetail()
			})
		},
		slideBarItemClick(index) {
			this.getSubcategory(index)
			//切换类型的时候重置tabControl的索引，当前的tab索引，使切换类型tabControl总能从流行开始
			this.$refs.tabControl.currentindex = 0
			this.typeIndex = 0
			this.currentIndex = index
			//并且用新的索引请求数据
			this.getCategoryDetail()
			this.$refs.scroll.scrollTo(0, 0, 0)
			//跳到最顶，不然切换界面还是原来的位置，不能从头开始看
		},
		getSubcategory(index) {
			//将分类索引交给当前索引记录，以便请求type数据
			this.currentIndex = index
			//根据当前的点击的分类的索引，去找到对应的maitKey去请求数据，再把数据交给currentList
			const currentmaitKey = this.categoryList[index].maitKey
			getSubcategory(currentmaitKey).then(res => {
				this.currentList = res.data.list
			})
		},
		getCategoryDetail() {
			this.$toast.loading({
				// loading的时候禁止点击
				forbidClick: true,
				message: '加载中...',
			})
			getCategoryDetail(
				this.categoryList[this.currentIndex].miniWallkey,
				this.typeStyle[this.typeIndex]
			).then(res => {
				this.tpyeData = res.data
				setTimeout(() => {
					this.$toast.clear()
				}, 500)
			})
		},
		tabClick(typeIndex) {
			this.typeIndex = typeIndex
			this.$refs.tabControl1.currentindex = typeIndex
			this.$refs.tabControl.currentindex = typeIndex
			this.getCategoryDetail()
		},
		goodsImgLoad() {
			this.countTop()
		},
		backTopScroll(position) {
			const positionY = -position.y
			if (positionY >= this.tabControlTop) {
				this.isStatic = true
			} else {
				this.isStatic = false
			}
		},
	},
	activated() {
		this.$refs.scroll.refresh()
		this.$bus.$on('imgLoad', () => {})
	},
	mounted() {
		this.countTop = debounce(() => {
			this.tabControlTop = this.$refs.tabControl.$el.offsetTop
		}, 500)
	},
}
</script>

<style scoped>
.content {
	position: fixed;
	top: 44px;
	bottom: 49px;
	right: 0;
	left: 85px;
	overflow: hidden;
}
.goods-font .goods-info p {
	font-size: 10px;
}
.static {
	position: relative;
	width: calc(100% - 85px);
	left: 85px;
	right: 0;
	z-index: 9;
}
</style>

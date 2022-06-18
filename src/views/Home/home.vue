<template>
	<div id="home">
		<nav-bar class="NavBarColor">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control
			:title="['流行', '新款', '精选']"
			@tabClick="tabClick"
			ref="tabControl1"
			v-show="isFixed"
			class="tabControl"
		></tab-control>
		<scroll
			class="content"
			ref="scroll"
			:probe-type="3"
			@scroll="isShowBackTop"
			:pull-up-load="true"
			@pullingUp="loadMore"
		>
			<home-swiper
				:banners="banners"
				@swiperImageLoad="swiperImageLoad"
			></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control
				:title="['流行', '新款', '精选']"
				@tabClick="tabClick"
				ref="tabControl2"
			></tab-control>
			<goods-list :List="showGoods"></goods-list>
		</scroll>
		<back-top @click.native="backTopClick" v-show="showBackTop"></back-top>
	</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/srcoll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

import HomeSwiper from './childcomps/HomeSwiper.vue'
import RecommendView from './childcomps/RecommendView.vue'
import FeatureView from './childcomps/FeatureView.vue'

import { getHomeData, getHomeGoods } from 'network/home.js'

export default {
	name: 'home',
	data() {
		return {
			banners: [],
			recommends: [],
			goods: {
				pop: { page: 0, list: [] },
				new: { page: 0, list: [] },
				sell: { page: 0, list: [] },
			},
			currentType: 'pop',
			showBackTop: false,
			tabControlOffsetTop: null,
			isFixed: false,
			//记录离开时组件的y轴位置
			scrollY: 0,
		}
	},
	components: {
		NavBar,
		TabControl,
		GoodsList,
		Scroll,
		BackTop,
		HomeSwiper,
		RecommendView,
		FeatureView,
	},
	created() {
		//请求首页数据
		this.getHomeData()
		this.getHomeGoods('pop')
		this.getHomeGoods('new')
		this.getHomeGoods('sell')
	},
	methods: {
		//图片加载之后触发，计算图片加载后tabcontrol的offsettop
		swiperImageLoad() {
			this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
		},
		//scroll中触发pullingUp时触发
		loadMore() {
			this.getHomeGoods(this.currentType)
		},
		// 修改showBackTop从而决定回到顶部按钮的显示
		isShowBackTop(position) {
			// console.log(position.y);
			this.showBackTop = -position.y > 1000
			this.isFixed = -position.y > this.tabControlOffsetTop
		},
		// 回到顶部
		backTopClick() {
			this.$refs.scroll.scrollTo(0, 0)
		},
		// 监听tabClick事件从而改变currentType的值
		tabClick(index) {
			switch (index) {
				case 0:
					this.currentType = 'pop'
					break
				case 1:
					this.currentType = 'new'
					break
				case 2:
					this.currentType = 'sell'
					break
			}
			this.$refs.tabControl1.activeindex = index
			this.$refs.tabControl2.activeindex = index
		},
		//网络请求相关
		getHomeData() {
			getHomeData()
				.then(res => {
					// console.log(res);
					this.banners = res.data.data.banner.list
					this.recommends = res.data.data.recommend.list
				})
				.catch(() => {})
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1
			getHomeGoods(type, page).then(res => {
				this.goods[type].list.push(...res.data.data.list)
				this.goods[type].page++
				this.$refs.scroll.finishPullUp()
			})
		},
	},
	activated() {
		this.$refs.scroll.refresh()
		this.$refs.scroll.scrollTo(0, this.scrollY, 0)
	},
	deactivated() {
		this.scrollY = this.$refs.scroll.getScrollY()
	},
	computed: {
		showGoods() {
			return this.goods[this.currentType].list
		},
	},
}
</script>

<style scoped>
.tabControl {
	position: relative;
	left: 0;
	right: 0;
	z-index: 2;
}
.NavBarColor {
	background-color: rgba(252, 49, 32);
	color: #fff;
}
#home {
	/* padding-top: 44px; */
	position: relative;
	height: 100vh;
}

.content {
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
	overflow: hidden;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>

<template>
	<div id="detail">
		<detail-nav-bar
			class="detail-nav"
			@itemClick="itemClick"
			ref="detailNavBar"
		></detail-nav-bar>
		<detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
		<scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info
				:detail-info="detailInfo"
				@imageLoad="imageLoad"
			></detail-goods-info>
			<detail-param-info
				:param-info="paramInfo"
				ref="params"
			></detail-param-info>
			<detail-comment-info
				:comment-info="commentInfo"
				ref="comment"
			></detail-comment-info>
			<goods-list :List="recommend" ref="recommend"></goods-list>
		</scroll>
		<back-top v-show="showBackTop" @click.native="backtop"></back-top>
	</div>
</template>

<script>
import Scroll from 'components/common/srcoll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailShopInfo from './childcomps/DetailShopInfo.vue'
import DetailGoodsInfo from './childcomps/DetailGoodsInfo.vue'
import DetailParamInfo from './childcomps/DetailParamInfo.vue'
import DetailCommentInfo from './childcomps/DetailCommentInfo.vue'
import DetailBottomBar from './childcomps/DetailBottomBar.vue'
import { debounce } from 'common/utils.js'
import {
	getDetail,
	Goods,
	Shop,
	GoodsParam,
	getRecommend,
} from 'network/detail'

export default {
	name: 'detail',
	components: {
		Scroll,
		BackTop,
		GoodsList,
		DetailNavBar,
		DetailSwiper,
		DetailBaseInfo,
		DetailShopInfo,
		DetailGoodsInfo,
		DetailParamInfo,
		DetailCommentInfo,
		DetailBottomBar,
	},
	data() {
		return {
			showBackTop: false,
			iid: null,
			topImages: [],
			goods: {},
			shop: {},
			detailInfo: {},
			paramInfo: {},
			commentInfo: {},
			recommend: [],
			topY: [],
			getTopY: null,
			currentIndex: 0,
		}
	},
	created() {
		// 获取id
		this.iid = this.$route.params.iid
		// 请求详细数据
		getDetail(this.iid).then(res => {
			scroll
			//请求轮播图数据
			const data = res.data.result
			this.topImages = data.itemInfo.topImages

			//获取商品信息
			this.goods = new Goods(
				data.itemInfo,
				data.columns,
				data.shopInfo.services
			)

			//创建店铺信息的对象
			this.shop = new Shop(data.shopInfo)

			// 保存商品的详情数据
			this.detailInfo = data.detailInfo

			// 获取参数的信息
			this.paramInfo = new GoodsParam(
				data.itemParams.info,
				data.itemParams.rule
			)
			// 取出评论的信息
			if (data.rate.cRate !== 0) {
				this.commentInfo = data.rate.list[0]
			}
		})
		// 请求推荐数据
		getRecommend().then(res => {
			this.recommend = res.data.data.list
		})
		// 给getTopY赋值
		this.getTopY = debounce(() => {
			this.topY = []
			this.topY.push(0)
			this.topY.push(this.$refs.params.$el.offsetTop)
			this.topY.push(this.$refs.comment.$el.offsetTop)
			this.topY.push(this.$refs.recommend.$el.offsetTop)
		}, 100)
	},
	methods: {
		//监听添加购物车按钮并作出响应
		addToCart() {
			// 1.创建对象存放获取购物车需要展示的信息
			const product = {}
			product.image = this.topImages[0]
			product.title = this.goods.title
			product.desc = this.goods.desc
			product.price = this.goods.realPrice
			product.iid = this.iid
			this.$store.dispatch('addToCart', product).then(() => {
				// console.log('-------')
				this.$mytoast.show('添加购物车成功', 1500)
			})
		},
		//图片加载完后刷新可滚动区域和调用getTopY给topY数组赋值
		imageLoad() {
			this.$refs.scroll.refresh()
			this.getTopY()
		},
		// 监听滚动位置改变返回顶部按钮和商品导航栏状态
		scroll(position) {
			this.showBackTop = -position.y > 1300
			let poYs = -position.y
			for (let i = 0; i < this.topY.length; i++) {
				// if(this.currentIndex!==i&&)
				if (
					this.currentIndex !== i &&
					((i === this.topY.length - 1 && poYs > this.topY[i]) ||
						(i < this.topY.length - 1 &&
							poYs > this.topY[i] &&
							poYs < this.topY[i + 1]))
				) {
					this.currentIndex = i
					this.$refs.detailNavBar.currentIndex = i
				}
			}
		},
		// 回到顶部按钮
		backtop() {
			this.$refs.scroll.scrollTo(0, 0)
		},
		// 点击导航栏切换页面位置
		itemClick(index) {
			this.$refs.scroll.scrollTo(0, -this.topY[index], 500)
		},
	},
}
</script>

<style scoped>
#detail {
	position: relative;
	z-index: 9;
	background-color: #fff;
	height: 100vh;
}
.detail-nav {
	position: relative;
	z-index: 9;
	background-color: #fff;
}
.content {
	/* height: calc(100% - 44px); */
	position: absolute;
	top: 44px;
	bottom: 49px;
}
</style>

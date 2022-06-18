import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/Home/home')
const Category = () => import('views/Catagory/Category')
const ShopCart = () => import('views/ShopCart/shopcart')
const Profile = () => import('views/Profile/profile')
const Detail = () => import('views/Detail/detail')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: '首页',
		},
	},
	{
		path: '/category',
		component: Category,
		meta: {
			title: '分类',
		},
	},
	{
		path: '/shopcart',
		component: ShopCart,
		meta: {
			title: '购物车',
		},
	},
	{
		path: '/profile',
		component: Profile,
		meta: {
			title: '我的',
		},
	},
	{
		path: '/detail/:iid',
		component: Detail,
		meta: {
			title: '详情',
		},
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

router.beforeEach((to, from, next) => {
	window.document.title = to.matched[0].meta.title
	next()
})

export default router

<template>
	<div class="login">
		<div class="avatar">
			<div class="img">
				<img src="~assets/img/profile/avatar.svg" alt="" />
			</div>
		</div>
		<div class="function">
			<div class="top">登录/注册</div>
			<div class="bottom">
				<img src="~assets/img/profile/phone.svg" alt="" />
				<span>暂无绑定手机号</span>
			</div>
		</div>
		<div class="toLogin" @click="showtoast">
			<div class="img">
				<img src="~assets/img/profile/arrow_right.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'profile',
	methods: {
		showtoast() {
			this.$mytoast.show('该功能暂未开放', 2000)
		},
	},
}
</script>

<style scoped>
.function img {
	height: 60%;
}
.toLogin {
	height: 100%;
	width: 45px;
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
}
.toLogin .img {
	padding-right: 5px;
}
.function {
	flex: 1;
	height: 100%;
	color: white;
}

.function .top {
	height: 50px;
	padding-left: 10px;
	line-height: 70px;
	font-size: 19px;
}
.function .bottom {
	height: 40px;
	padding-left: 5px;
	line-height: 20px;
}
.bottom span {
	position: relative;
	top: -6px;
}
.login {
	display: flex;
	width: 100%;
	height: 90px;
	background-color: rgba(252, 49, 32);
}
.avatar {
	width: 100px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.avatar .img {
	width: 80%;
	height: 80%;
}

.avatar .img img {
	width: 100%;
	height: 100%;
}
</style>

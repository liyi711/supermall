<template>
	<div class="account">
		<div v-for="i in item" class="item">
			<div class="number">
				<div>
					<span>{{ i.a }}</span>
					<span>{{ i.b }}</span>
				</div>
			</div>
			<div class="text">我的{{ i.c }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'account',
	data() {
		return {
			item: [
				{
					a: '0.00',
					b: '元',
					c: '余额',
				},
				{
					a: 0,
					b: '个',
					c: '优惠',
				},
				{
					a: 0,
					b: '分',
					c: '积分',
				},
			],
		}
	},
}
</script>

<style scoped>
.item {
	border: 1px solid rgba(242, 242, 242);
	border-top: 0;
	border-bottom: 0;
}
.number div span:first-child {
	color: orangered;
	font-size: 24px;
	font-weight: bold;
}
.item .number {
	/* display: flex; */
	/* justify-content: center; */
	position: relative;
}
.item .number div {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 2px;
}
.item div {
	height: 50%;
	text-align: center;
}
.item .text {
	padding-top: 5px;
}
.account {
	display: flex;
	height: 90px;
	border-bottom: 15px solid rgba(242, 242, 242);
}
.account div {
	flex: 1;
	border: 0 2px solid rgba(242, 242, 242);
}
</style>

<template>
	<PageLayout :isBack="false">
		<template class="travel-page">
			<FlowLayout :list="travelList" />
			<BottomTip />
		</template>
	</PageLayout>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import FlowLayout from '@/components/flowLayout.vue'
	import BottomTip from '@/components/bottomTip.vue'
	import PageLayout from '@/components/pageLayout/index.vue'
	const travelList = ref([{
			pic: '/static/travel/travel_3.jpg',
			desc: '恩施-小溪古村落，好像世外桃源的入口',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_4.jpg',
			desc: '仙气飘飘的原野。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_10.jpg',
			desc: '在蜿蜒盘曲的山路上行驶。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/travel_13.jpg',
			desc: '在泸定休息，打开车门呼吸清新的空气，眺望远方景色。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_30.jpg',
			desc: '波密——江边、小曲、夕阳、散步。',
			diretion: 'column'
		}, 
		// {
		// 	pic: '/static/travel/travel_34.jpg',
		// 	desc: '在察尔汗盐湖捧一捧盐。',
		// 	diretion: 'column'
		// },

		{
			pic: '/static/travel/travel_25.jpg',
			desc: '高原上的场景。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/5.jpg',
			desc: '合肥的小岭南花海。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/14.jpg',
			desc: '烈士陵园的石碑。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/10.jpg',
			desc: '西安秦始皇兵马俑博物馆里的兵马俑像。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/9.jpg',
			desc: '西安不夜城的演出。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/13.jpg',
			desc: '南昌网红铛铛车。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/travel_5.jpg',
			desc: '杭州动物园里正在休息的熊猫。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/12.jpg',
			desc: '李白笔下的庐山真面目，雨后更为壮观。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_16.jpg',
			desc: '四川折多山，由于海拔较高，山顶的气温低，山顶有积雪覆盖。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/11.jpg',
			desc: '西安秦始皇雕像。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/17.jpg',
			desc: '江西景德镇-陶瓷博物馆内的“无语菩萨”，其实是沉思罗汉。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/8.jpg',
			desc: ' 在山东日照看海。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/travel_32.jpg',
			desc: '在可可西里遇见的野生狼，看见人会主动要吃的。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_33.jpg',
			desc: '昆仑山脉，雪铺在山上，看起来像随变雪糕。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/travel_37.jpg',
			desc: '阴天下的天空之境，倒映的也是灰色的镜像。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_9.jpg',
			desc: '重庆的夜景。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/travel_11.jpg',
			desc: '在高原地区膨胀的包装袋。',
			diretion: 'column'
		},
		{
			pic: '/static/travel/6.jpg',
			desc: '安徽黄山上的怪石。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/3.jpg',
			desc: '南京的网红猴子，在水里不敢上岸。',
			diretion: 'column'
		},

		{
			pic: '/static/travel/travel_8.jpg',
			desc: '重庆动物园里躺平的熊。',
			diretion: 'column'
		},
	])
</script>

<style scoped>
	.travel-page {
		width: 100%;
		height: calc(100vh - 94px);
		overflow: hidden auto;
		padding: 10px;
	}
</style>
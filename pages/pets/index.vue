<template>
	<PageLayout :isBack="false">
		<template>
			<view class="pet-page">
				<view class="left-nav">
					<view v-for="(item, index) in navList" :key="item.id" class="nav-item"
						:class="{ active: currentIndex === index }" @click="onClickItem(index)">
						<text class="nav-text">{{ item.title }}</text>
					</view>
				</view>
				<view class="right-content">
					<view class="" v-if="!currentIndex">
						<FlowLayout :list="catList" />
					</view>
					<view class="" v-if="currentIndex">
						<FlowLayout :list="dogList" />
					</view>
				</view>
			</view>
		</template>
	</PageLayout>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import PageLayout from '@/components/pageLayout/index.vue'
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import FlowLayout from '@/components/flowLayout.vue'

	let currentIndex = ref(0);
	let navList = ref([{
			title: '喵主子',
			id: 'cat',
			key: 0
		},
		{
			title: '汪汪队',
			id: 'dog',
			key: 1
		}
	]);

	const dogList = ref([{
			pic: '/static/dog/pet_dumpling_5.jpg',
			desc: "团子是一只憨憨的小博美，目前两岁多。她的性格很活泼，但是有些犟，她能听懂你说的话，但是会不会搭理你要看她的心情了。养久了发现，其实她会有自己的想法，也有自己的情绪，就像个小人儿一样。",
			diretion: 'column'
		},
		{
			pic: '/static/dog/pet_dumpling_10.jpg',
			desc: "有时候真的会怀疑她是不是知道自己很可爱，总是睁着圆圆的眼睛看着你。这个是刚给她洗完澡换了新衣服，她躺在自己的窝里睡觉，我过去逗她玩她抬眼看我的场景。看她的表情好像在说“你咋来了”。",
			diretion: 'column'
		},
		{
			pic: '/static/dog/pet_dumpling_11.jpg',
			desc: "这张照片是过年的时候带她回家，邻居小孩经常来家里跟她玩，孩子小不会把握力度，可能弄疼了她，于是她跑到我腿边坐下，让我护着她。这时候看着她圆圆的脑袋，感觉她还挺聪明的。",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_dumpling_8.jpg',
			desc: "空闲的时候我喜欢在楼顶晒太阳，感觉温暖又惬意。而她总是可以在我要出门之前精准的感知到，然后兴奋的围着我转圈跑，最后我只好默许她屁颠屁颠的跟在后边一起出门。那时候她好像就有七八斤重了，再加上毛长就显得格外圆润。",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_dumpling_1.jpg',
			desc: "有一次带她出门溜达，她死活不愿意出来，不管怎么喊她她都不理，后来才知道是地上太凉了冻脚。于是我开始了给她买衣服之旅。至于鞋子，她的脚实在是太小了，鞋子总是跑掉，后来干脆不穿了。",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_dumpling_4.jpg',
			desc: "博美三个月之后会有个尴尬期，脸白白的像只小猴子。记得这是在一家奶茶店里，等奶茶的那几分钟里有几个小姐姐夸她可爱，还给她拍照，可给她开心坏了，咧着嘴一直笑。",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_dumpling_6.jpg',
			desc: "我在围栏边逗她玩给她拍照，她趴在围栏上俏皮的望着我，这一幕我感觉好像在哪看见过，有种很熟悉的感觉，后来想起来了，这是不是跟旺仔牛奶上的小人一模一样！",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_dumpling_3.jpg',
			desc: "晚饭后带着狗子在楼下散散步也是一种惬意，一人一狗在昏黄的路灯下慢慢的走，什么都不用想。人少的时候我也会撒开绳子，看她兴奋的到处跑到处嗅。这时候你是喊不回来的，不是听不见，是她还没玩够不想往回走。不过也不用急，稍微等等她就会自己回来了。",
			diretion: 'row'
		}, {
			pic: '/static/dog/pet_dumpling_2.jpg',
			desc: "我在围栏边逗她玩给她拍照，她趴在围栏上俏皮的望着我，这一幕我感觉好像在哪看见过，有种很熟悉的感觉，后来想起来了，这是不是跟旺仔牛奶上的小人一模一样！",
			diretion: 'row'
		}, {
			pic: '/static/dog/pet_dumpling_7.jpg',
			desc: "看她在屋里太疯了我就会把她带出去消耗体力，这次是去城隍庙。在里边的小巷子走了几个来回，把她累的够呛。路上碰见别的狗狗，她跑上去跟人家打招呼，但是人家汪一声她就吓得飞奔回来，着实好笑。",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_dumpling_12.jpg',
			desc: "隔壁邻居家里办喜事，用来染鸡蛋的颜料有点剩余，被我拿回来了，给她洗个澡染了耳朵和尾巴尖，还真别说，染色之后像只小狐狸，还怪好看呢！",
			diretion: 'row'
		}, {
			pic: '/static/dog/pet_dumpling_9.jpg',
			desc: "她就像个小孩一样，年后准备返程时我们搬东西，她在脚下跑来跑去的，我们怕踩到她让老妈把她抱起来。她以为我不带她走不要她了，激动的汪汪直叫，我突然明白她其实什么都懂。",
			diretion: 'row'
		},


		{
			pic: '/static/dog/pet_snowball_5.jpg',
			desc: "这是早上带她遛弯后在早点铺子前，老板看见我手上的绳子问我多大的狗啊要用这么粗的绳子，还没等我回答他往前一倾，噗嗤笑出了声，我低头看着圆滚滚的她老老实实坐在地上，不禁拿起手机拍照记录。",
			diretion: 'row'
		},
		{
			pic: '/static/dog/pet_snowball_7.jpg',
			desc: "小时候担心她饿到，上班午休时间我都会回家给她弄些吃食，看着她吃完再跟她玩一会再回去上班。某天中午我回到家，看见她眯着眼睛趴在那里好可爱，于是就有了这张照片。",

			diretion: 'row'
		},

		{
			pic: '/static/dog/pet_snowball_2.jpg',
			desc: "这是第一次教她坐车的场景。我们原本在楼下散步，路过这里时感觉这个灯光很好看，照在她身上金灿灿的。恰好电车在旁边，我就突然想教她坐车，这样以后就可以带她出去玩，不必再局限于小区里面。",

			diretion: 'row'
		}, {
			pic: '/static/dog/pet_snowball_6.jpg',
			desc: "我抱着她把前脚放在脚踏板上，喊她上车，她貌似听懂了，后脚不停往上爬但是腿短爬不上去，场面十分滑稽。最后肯定是学会了，但是我没想到的是后来出去玩的时候车子没电了，她竟然不！下！车！我愣是推着她走回家的。",

			diretion: 'row'
		},

		{
			pic: '/static/dog/pet_snowball_4.jpg',
			desc: "雪球是一只可爱的萨摩耶，她很聪明，像坐下、握手、打滚这些互动技能，都是几遍就学会了。她生性活泼爱动，喜欢和人一起玩耍。每次带她下楼遛弯都不免遇到热情的朋友想要给她拍照，亦或想摸摸毛茸茸的她。",

			diretion: 'row'
		}, {
			pic: '/static/dog/pet_snowball_1.jpg',
			desc: "她总共陪了我一年多时间，是那时我只身在外地生活的唯一陪伴。开始总是担心万一教不会定点，那每天清洁地面多麻烦。可是没过几天，我突然发现她自己学会了！这种惊喜感难以言说，我非常开心，感叹自己运气真好。",

			diretion: 'row'
		},

		{
			pic: '/static/dog/pet_snowball_8.jpg',
			desc: "闲得无聊时我喜欢举起手模仿枪对着她“啪”一声，她哒哒哒的跑过来然后仰面躺下，逗得我哈哈大笑。这是她睡觉的照片，狗狗只有对环境非常信任的时候才会这样四脚朝天睡觉。在我身边她总是睡得很安心。",

			diretion: 'row'
		}, {
			pic: '/static/dog/pet_snowball_11.jpg',
			desc: "有时候夜里醒来，一转身发现她把头搭在床边看着我，起初吓我一大跳，而她就两眼无辜的冲我傻笑，我不忍怪她，这样次数多了我醒来都会先伸手摸摸她的头。",

			diretion: 'row'
		},

		{
			pic: '/static/dog/pet_snowball_12.jpg',
			desc: "其实父母一开始是反对她的存在的，但是过年期间我带她回家后全都变了。我爸每天饭后都要带着她出去遛弯消食，把她带到人少的地方让她撒欢的玩，比我带在身边的时候还要快活。",

			diretion: 'row'
		}, {
			pic: '/static/dog/pet_snowball_3.jpg',
			desc: "有一次快要睡着时听见门外的声音，老爸问狗子呢，老妈说在我旁边睡觉呢。天知道那刻真的很温馨。后来她出现意外离开了，我为此难过了许久。这个照片是带她回家的路上拍的，不知道她在想什么呢。",

			diretion: 'row'
		},

		{
			pic: '/static/dog/pet_snowball_13.jpg',
			desc: "我妈就喜欢拉着她拍照，给她穿上小衣服小鞋，跟个人儿似的照顾她。我把她的窝放在我的房间，但是她不睡，她总是在我睡着后躺在我床边，离我很近。",

			diretion: 'row'
		}, {
			pic: '/static/dog/pet_snowball_10.jpg',
			desc: "这是带她去公园露营时拍的照片，别看她咧着嘴一副人畜无害的样子，实际上机警的很。此时她趴在我身边，有人靠近的话她就会紧紧盯住对方。",

			diretion: 'row'
		}
	])

	const catList = ref([{
			pic: '/static/cat/pet_mimi_1.jpg',
			desc: "咪咪是从老家抱来的田园猫，当时在姥姥家看到大猫的一窝崽崽，小猫连同大猫都瘦瘦的，我想着家里有狗了再养只猫吧，于是将她带了回来。她倒是一点不怕生，也不怕狗狗，到家之后就到处溜达，最后认准了我的拖鞋。",
			diretion: 'column'
		},
		{
			pic: '/static/cat/pet_mimi_4.jpg',
			desc: "不知道是不是吃的好的原因，她长的可快了。每天看着她感觉不到变化，但是一翻照片就会发现又长大了一圈。她还是很喜欢钻我的拖鞋，而我正好可以用拖鞋做对比，看看她又长了多少。",
			diretion: 'column'
		},

		{
			pic: '/static/cat/pet_mimi_2.jpg',
			desc: "由于从小就是猫粮不间断的喂，所以她也养成了吃饭不紧不慢的性子，加粮的时候她会跑过去吃几口，然后跑一边玩去了，过了一会再来吃几口。如此我每次一出门就看见她在吃饭。",

			diretion: 'column'
		},
		{
			pic: '/static/cat/pet_mimi_3.jpg',
			desc: "不论我干什么她都要看一眼，所以我总是时不时的感叹怪不得说猫最有好奇心了。别看她在脚下卧的老实，我一起身她就跑了，跑一圈然后身体一歪就躺在那看我，我以为是等我呢，一查才知道她只是跑累了。",

			diretion: 'column'
		},

		{
			pic: '/static/cat/pet_mimi_10.jpg',
			desc: "不到六个月的时间她就长的和团子差不多体型了，平常她俩一见面就跟处了八年的好姐妹似的，你追我我追你。她俩友好相处我也很开心，但是每次刚洗完澡不大会就互相啃的都是口水，这点让我很是头疼。",

			diretion: 'column'
		},
		{
			pic: '/static/cat/pet_mimi_12.jpg',
			desc: "我一直都以为别让猫跟狗玩是个梗，直到我偶然间看见猫的坐姿。那一刻我愣住了，然后差点给我笑死。她后半身躺着，前腿撑着地，甚是妖娆。没错，我的狗也是这么坐的。猫咪学会了狗的坐姿，狗子学会了猫的揣手手。",

			diretion: 'column'
		},

		{
			pic: '/static/cat/pet_mimi_5.jpg',
			desc: "我是不允许她进卧室的，但是她总是蹲在门口，在我开门出去的时候趁我不注意溜进房间。我躺在床上玩手机，感觉旁边有道小小的影子，扭头一看发现她扒着床单不知道在看什么。",

			diretion: 'column'
		},
		{
			pic: '/static/cat/pet_mimi_9.jpg',
			desc: "在她小时候我总是跟朋友开玩笑，说她的眼睛看起来就很智慧，后来慢慢的长大了，她还是一点都没变，整个猫憨憨的。假期的时候把她带回了姥姥家，又见到了那只大猫，她已经长的比她的妈妈壮实了。",

			diretion: 'column'
		}
	])


	onLoad(() => {
		getStorage()
	})

	onShow(() => {
		getStorage()
	})

	const getStorage = () => {
		if (typeof uni !== 'undefined') {
			const {
				key
			} = uni.getStorageSync('petTabKey')
			const currentKey = navList.value.find(item => item.id === key)?.key || 0
			currentIndex.value = currentKey
		}
	}

	const onClickItem = (newTab) => {
		currentIndex.value = newTab
	}
</script>

<style lang="less" scoped>
	.pet-page {
		width: 100%;
		height: 100%;
		display: flex;
	}

	.left-nav {
		width: 190rpx;
		height: 100%;
		border-right: 1px solid #afafaf;
	}

	.nav-item {
		padding: 40rpx 30rpx 0 30rpx;

		&.active {
			.nav-text {
				color: #A686BA;
				font-weight: 600;
			}
		}
	}

	.right-content {
		flex: 1;
		padding: 20rpx 20rpx 0;
		overflow-y: auto;
	}

	// .nav-item {
	// 	display: ;
	// }
</style>
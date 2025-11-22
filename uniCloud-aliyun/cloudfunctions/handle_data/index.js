'use strict';
// interface Iprops {
// 	event : {
// 		action : 'add' | 'select',
// 		category : 'pet' | 'travel' | 'user',
// 		com : {
// 			user_img : string,
// 			user_name : string,
// 			comMsg : string,
// 			time : string
// 		}
// 	},
// 	context ?: any
// }
exports.main = async (event) => {
	//event为客户端上传的参数
	const db = uniCloud.database();
	try {
		// 添加单条数据
		if (event?.action === 'add') {
			const result = await db.collection('pet_and_travel_data').add({
				...event || {}
			});
			return {
				code: 200,
				message: '添加成功',
				data: result || []
			};
		}
	} catch (error) {
		return {
			code: 500,
			message: '添加数据失败',
			error: error.message
		};
	}
	// db.collection('petInfo_data').get()
	//返回数据给客户端
	return event
};
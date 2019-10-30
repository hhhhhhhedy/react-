//const uuidv4 = require('uuid/v4');
var login = async (req, res) => {
    const { username, password } = req.body
    if (username === 'admin' && password === '123456') {
        res.send({
            'status': 0,
            'data': {
                '_id': 1,
                'username': 'admin',
                'password': '123456',
                'role': {
                    'menus': []
                }
            }
        })
    } else {
        res.send({
            'status': 1,
            'msg': '用户名或密码不正确'
        })
    }
}
//获取分类列表
var categroylist = async (req, res) => {
    const { parentId } = req.query;
    if (parentId === '0') {
        res.send({
            'status': 0,
            'data': [
                {
                    'parentId': '0',
                    '_id': 5,
                    'name': '家用电器',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 6,
                    'name': '图书',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 7,
                    'name': '电脑',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 8,
                    'name': '服装',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 9,
                    'name': '食品',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 10,
                    'name': '玩具',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 11,
                    'name': '医药',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 12,
                    'name': '汽车产品',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 13,
                    'name': '箱包',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 14,
                    'name': '家具',
                    '_v': 0
                },
                {
                    'parentId': '0',
                    '_id': 15,
                    'name': 'XXX',
                    '_v': 0
                },

            ]

        })
    } else {
        res.send({
            'status': 0,
            'data': [
                {
                    'parentId': 5,
                    '_id': 1,
                    'name': '电视',
                    '_v': 0
                },
                {
                    'parentId': 5,
                    '_id': 2,
                    'name': '空调',
                    '_v': 0
                },
                {
                    'parentId': 5,
                    '_id': 3,
                    'name': '冰箱洗衣机',
                    '_v': 0
                },
                {
                    'parentId': 5,
                    '_id': 4,
                    'name': '厨卫电器',
                    '_v': 0
                },
            ]
        })
    }
}





var add = async (req, res) => {
    const { parentId, categoryName } = req.body;
    if (parentId && categoryName) {
        res.send(await {
            'status': 0,
            'data': {
                'parentId': parentId,
                '_id': 3,
                'name': categoryName,
                '_v': 0
            }
        })
    } else {
        res.send({
            'status': 1,
            'msg': '添加失败'
        })
    }
}

var update = async (req, res)=>{
     const { categoryId, categoryName } = req.body;
    // console.log(req.body)
     if(categoryId && categoryName){
        res.send( await {
            'status': 0,
            'data': {
                'parentId': '0',
                '_id': categoryId,
                'name': categoryName,
                '_v': 0
            }
        })
     }else{
        res.send({
            'status': 1,
            'msg': '更新失败'
        })
     }
   
   
   
}
module.exports = {
    login,
    categroylist,
    add,
    update
}
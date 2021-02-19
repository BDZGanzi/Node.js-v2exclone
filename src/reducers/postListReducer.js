import postService from '../services/postListService'
const postReducer = (state = [], action) => {
    switch(action.type){
        case 'INIT_POST':
            return action.data
        case 'GET_HOT':
            return action.data
        case 'GET_RECENT':
            return action.data
        default:
            return state
    }
}

export const getHot = () => {
    // const hotPosts = await postService.getHot()
    // return {
    //     type: 'GET_HOT',
    //     data: hotPosts
    // }
    return async dispatch => {
        const hotPosts = await postService.getHot()
        dispatch({
            type: 'GET_HOT',
            data: hotPosts
        })
    }
}

export const getRecent = () => {
    const recentPosts = [
        {
            "node": {
                "avatar_large": "https://cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1597635737",
                "name": "programmer",
                "avatar_normal": "https://cdn.v2ex.com/navatar/94f6/d7e0/300_normal.png?m=1597635737",
                "title": "程序员",
                "url": "https://www.v2ex.com/go/programmer",
                "topics": 39899,
                "footer": "",
                "header": "While code monkeys are not eating bananas, they're coding.",
                "title_alternative": "Programmer",
                "avatar_mini": "https://cdn.v2ex.com/navatar/94f6/d7e0/300_mini.png?m=1597635737",
                "stars": 6907,
                "aliases": [

                ],
                "root": false,
                "id": 300,
                "parent_node_name": "computer"
            },
            "member": {
                "username": "altboy",
                "website": null,
                "github": null,
                "psn": null,
                "avatar_normal": "https://cdn.v2ex.com/avatar/25f4/f248/237908_mini.png?m=1500615457",
                "bio": null,
                "url": "https://www.v2ex.com/u/altboy",
                "tagline": null,
                "twitter": null,
                "created": 1498748616,
                "avatar_large": "https://cdn.v2ex.com/avatar/25f4/f248/237908_mini.png?m=1500615457",
                "avatar_mini": "https://cdn.v2ex.com/avatar/25f4/f248/237908_mini.png?m=1500615457",
                "location": null,
                "btc": null,
                "id": 237908
            },
            "last_reply_by": "tasidingo",
            "last_touched": 1597851569,
            "title": "测试",
            "url": "https://www.v2ex.com/t/699531",
            "created": 1597803907,
            "content": "三十岁的 90 后,是的,没错,90 后都三十岁了...\r\n五年网管生涯,半年培训班,工资翻倍,抱得美人归,二线买房,目前坐标帝都,现在娃也两岁了..\r\n\r\n这个节点,也有些许的迷茫了,继续技术这条路倒也不是不行,计算机专业,技术也一直没有扔掉,就是现在摸鱼摸的代码好久都没写了,也没有大项目背书,一直混的话也只能等 35 下岗退休了.\r\n\r\n所以,考虑再三想回西安搞轻食餐厅,不知各位是否了解这个行业?能否给小弟一点建议或者谈谈对这个项目看法\r\n\r\n\r\n关于轻食创业是这样考虑的:\r\n\r\n1.  比起其他餐饮行业投入较低,试错成本也低\r\n\r\n2.  看了各方面的数据分析,此行业基本属于超朝阳行业\r\n\r\n3.  自己对餐饮也比较有兴趣吧,抖音早就被美食推荐全方位占据\r\n\r\n4.  本人从今年三月开始减肥,三个月瘦二十多斤,就是轻食+跑步,结果 6 月份膝盖伤了,现在持续轻食+力量,效果还不错\r\n\r\n5.  应该比较赚钱吧....哈哈",
            "content_rendered": "<p>三十岁的 90 后,是的,没错,90 后都三十岁了...\n五年网管生涯,半年培训班,工资翻倍,抱得美人归,二线买房,目前坐标帝都,现在娃也两岁了..</p>\n<p>这个节点,也有些许的迷茫了,继续技术这条路倒也不是不行,计算机专业,技术也一直没有扔掉,就是现在摸鱼摸的代码好久都没写了,也没有大项目背书,一直混的话也只能等 35 下岗退休了.</p>\n<p>所以,考虑再三想回西安搞轻食餐厅,不知各位是否了解这个行业?能否给小弟一点建议或者谈谈对这个项目看法</p>\n<p>关于轻食创业是这样考虑的:</p>\n<ol>\n<li>\n<p>比起其他餐饮行业投入较低,试错成本也低</p>\n</li>\n<li>\n<p>看了各方面的数据分析,此行业基本属于超朝阳行业</p>\n</li>\n<li>\n<p>自己对餐饮也比较有兴趣吧,抖音早就被美食推荐全方位占据</p>\n</li>\n<li>\n<p>本人从今年三月开始减肥,三个月瘦二十多斤,就是轻食+跑步,结果 6 月份膝盖伤了,现在持续轻食+力量,效果还不错</p>\n</li>\n<li>\n<p>应该比较赚钱吧....哈哈</p>\n</li>\n</ol>\n",
            "last_modified": 1597803980,
            "replies": 116,
            "id": 699531
        }
    ]
    return {
        type: 'GET_RECENT',
        data: recentPosts
    }
}

export default postReducer
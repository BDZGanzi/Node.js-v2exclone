import postService from '../services/postService'

const postReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POST_BY_ID':
            const postDetail = action.data.postDetail
            const replies = action.data.replies
            const post = Object.assign(postDetail, replies)
            console.log('action', post)
            return post
        default:
            return state
    }
}

export const getPostById = (id) => {
    console.log('getPostById', Date.parse(new Date()) / 1000)
    return async dispatch => {
        const postDetail = await postService.getPostDetailById(id)
        const replies = await postService.getReplyById(id)
        console.log('postDetail', postDetail)
        dispatch({
            type: 'GET_POST_BY_ID',
            data: {
                postDetail,
                replies
            }
        })
    }
}

export default postReducer
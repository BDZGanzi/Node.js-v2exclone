import axios from 'axios'

const baseUrl = 'http://localhost:3001/api'

const getPostDetailById = (id) => {
    const url = `${baseUrl}/post/${id}`
    const req = axios.get(url)
    return req.then(resp => resp.data)
}

const getReplyById = (id) => {
    const url = `${baseUrl}/reply/${id}`
    const req = axios.get(url)
    // console.log('service',req.then(resp => resp.data))
    return req.then(resp => resp.data)
}

export default { getPostDetailById, getReplyById }
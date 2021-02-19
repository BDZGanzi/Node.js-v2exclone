import axios from 'axios'

const baseURL = 'http://localhost:3001/api/'

const getHot = () => {
    const url = baseURL
    const req = axios.get(url)
    return req.then(resp => resp.data)
}

const getRecent = () => {
    const url = `${baseURL}/latest.json`
    const req = axios.get(url)
    return req.then(resp => resp.data)
}

export default { getHot, getRecent }
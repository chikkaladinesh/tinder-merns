import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-merns.herokuapp.com/"
})

export default instance
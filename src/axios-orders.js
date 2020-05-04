import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-using-hooks.firebaseio.com/'
});

export default instance;
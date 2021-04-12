import axios from "axios";


const instance = axios.create({
    baseURL: '/api',
    timeout: 6000,
});

const fetcher = (url: string) => instance.get(url).then(res => res.data)

export {
    fetcher
}




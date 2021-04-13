import axios from "axios";


const instance = axios.create({
    baseURL: '/api',
    timeout: 6000,
});

interface IFetcher {

}


const fetcher = <T>(url: string) => instance.get<T>(url).then(res => res.data)

export {
    fetcher
}




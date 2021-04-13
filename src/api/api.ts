import {fetcher} from './server'
import {IPlaySong} from '@/store/play/types'

const lyric = (id: number) => fetcher<{ lrc: { lyric: string } }>(`/lyric?id=${id}`) //获取歌词
const detail = (ids: number) => fetcher<{ songs: IPlaySong[] }>(`/song/detail?ids=${ids}`)//获取歌词详情
const newsong = (limit: number = 10) => fetcher(`/personalized/newsong?limit=${limit}`) //获取最新歌曲默认是10条
export {
    lyric,
    detail,
    newsong
}




import {Dispatch} from "redux"
import {detail, lyric} from '@/api/api'
import {PLAY_INIT, IPlayAction} from './types'
import {setAction} from '@/store/historyplay/action'

//设置正在播放的歌曲
const getPlaySong = (id: number) => async (dispatch: Dispatch<IPlayAction>) => {
    try {
        const [{songs}, {lrc}] = await Promise.all([detail(id), lyric(id)])
        dispatch({
            type: PLAY_INIT,
            payload: {
                ...songs[0],
                lyric: lrc.lyric
            }
        })

    } catch (e) {
        console.error(e)
    }

}  //拿到这首歌的具体信息


export {
    getPlaySong
}
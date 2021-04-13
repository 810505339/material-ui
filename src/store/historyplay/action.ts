import {HISTORY_CLEAR, HISTORY_SET} from './types'
import {IPlaySong} from "@/store/play/types";

//清空歌曲
export const clearAction = () => {
    return {
        type: HISTORY_CLEAR
    }
}

//设置歌曲
export const setAction = (song: IPlaySong) => {

    return {
        type: HISTORY_SET,
        payload: song
    }
}




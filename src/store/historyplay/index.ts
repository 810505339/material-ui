import {HISTORY_CLEAR, IHistoryAction, HISTORY_SET, IHistoryAdd} from "./types"
import {IPlaySong} from "@/store/play/types";

export interface IHistorySong {
    songList: IPlaySong[]
    songIndex: number //正在播放的歌曲的index
}

const historySong: IHistorySong = {
    songList: [],
    songIndex: 0
} //  历史歌单


export default function (preState = historySong, action: IHistoryAction): IHistorySong {
    const {type} = action

    switch (type) {
        case HISTORY_CLEAR:
            return {
                songList: [],
                songIndex: 0
            }
        case HISTORY_SET:
            const {payload} = action as IHistoryAdd
            const index = preState.songList.findIndex(song => song.id === payload.song.id)

            if (index >= 0) {
                return {
                    songList: [...preState.songList],
                    songIndex: index
                }
            }
            return {
                songList: [payload.song, ...preState.songList],  //添加操作
                songIndex: payload.index
            }
        default:
            return preState
    }
}
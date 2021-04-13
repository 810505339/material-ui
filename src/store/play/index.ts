import {IPlaySong, IPlayAction, PLAY_INIT} from "./types"

const initPlaySong: IPlaySong = {
    id: 0,
    duration: 0,
    name: '',
    lyric: '',
    mv: 0
} // 初始化的播放数据



export default function (preState = initPlaySong, action: IPlayAction): IPlaySong {
    const {type, payload} = action

    switch (type) {
        case PLAY_INIT:
            return payload
        default:
            return preState
    }
}
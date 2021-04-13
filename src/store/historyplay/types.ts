import {IPlaySong} from "@/store/play/types";

export const HISTORY_SET = "HISTORY_SET"  //修改历史歌曲
export const HISTORY_CLEAR = "HISTORY_CLEAR" //清空历史歌单


export interface IHistoryAdd {
    type: typeof HISTORY_SET,
    payload: {
        song: IPlaySong,
        index: number
    }
}

export interface IHistoryClear {
    type: typeof HISTORY_CLEAR,
}

export type IHistoryAction = IHistoryAdd | IHistoryClear


export const PLAY_INIT = "PLAY_INIT"

interface IArtists {
    id: number,
    name: string,
    imgUrl: string
}


export interface IPlaySong {
    id: number,
    name: string,
    duration: number,
    artists?: IArtists[],
    lyric: string
    mv: number
}


export interface IPlayInit {
    type: typeof PLAY_INIT,
    payload: IPlaySong
}

export type IPlayAction = IPlayInit
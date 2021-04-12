interface IArtists {
    id: number,
    name: string,
    img1v1Url: string
}


export interface IPlaySong {
    id: number,
    name: string,
    duration: number,
    artists: IArtists[],
}

const initPlaySong = {}


export default function (preState = initPlaySong, action) {

}
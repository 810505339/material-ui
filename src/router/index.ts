import {lazy, FC, LazyExoticComponent, ReactNode} from 'react'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import AlbumIcon from '@material-ui/icons/Album';


export interface IRoute {
    path: string,
    title?: string,
    icon?: ReactNode,
    component: LazyExoticComponent<FC<{ routes: IRoute[] | undefined }>>,
    routes?: IRoute[],
    exact?: boolean
}


const routes: IRoute[] = [
    {
        path: '/discovery',
        component: lazy(() => import('@/views/discovery')),
        title: '发现音乐',
        icon: AlbumIcon,

    },
    {
        path: '/song',
        component: lazy(() => import('@/views/discovery/Song')),
        title: '推荐歌单',
        icon: QueueMusicIcon,
    },
    // {
    //     path: '/discovery',
    //     component: lazy(() => import('@/views/discovery')),
    //     title: '最新音乐',
    //     icon: LibraryMusicIcon,
    // },
    // {
    //     path: '/discovery',
    //     component: lazy(() => import('@/views/discovery')),
    //     title: '最新MV',
    //     icon: MusicVideoIcon,
    // },
]

export {
    routes,

}
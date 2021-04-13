import React, {FC} from 'react'
import {Layout} from "@/components";
import PlayBar from "@/components/playbar";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from './store/rootReducer'
import {AppDispatch} from './store'
import {getPlaySong} from '@/store/play/action'


const App: FC = () => {
    const dispatch = useDispatch()
    const {play} = useSelector((state: RootState) => ({
        play: state.Play
    }))
    const handleClick = () => {
        dispatch(getPlaySong(1833633769))
    }
    return (<>
        <div style={{position: 'fixed', zIndex: 9999}}>
            <button onClick={handleClick}>按钮</button>
        </div>
        <Layout/>
        <PlayBar/>
    </>)
}


export default App

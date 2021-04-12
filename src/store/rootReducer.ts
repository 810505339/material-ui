import {combineReducers} from 'redux' //集成reducer
import Home from './homeReducer'
import Play from './play'

export type RootState = ReturnType<typeof rootReducer>


export const rootReducer = combineReducers({
    Home: Home,
    Play: Play
})

import {IAction} from "@/store/homeReducer/action";

interface IHomeState {
    count: number
}

const homeState: IHomeState = {
    count: 0
}


export default function (state = homeState, action: IAction) {
    const {type, payload} = action
    switch (type) {
        case "ADD_COUNT":
            return {...state, count: payload}
        case "SUB_COUNT":
            return {...state, count: payload}
        default:
            return state

    }
}
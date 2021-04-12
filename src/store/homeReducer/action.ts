export type IAction = {
    type: 'ADD_COUNT' | "SUB_COUNT",
    payload: number
}

export const ADD = (payload: number): IAction => {
    return {
        type: 'ADD_COUNT',
        payload: payload + 1
    }

}

export const SUB = (payload: number): IAction => {
    return {
        type: 'ADD_COUNT',
        payload: payload - 1
    }
}
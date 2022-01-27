import {GET_JOBS, GET_JOBERROR } from '../actions/index'


const initialState = {
    getJobs: []
}

export default function jobReducer(state = initialState, action) {

    console.log(action, state)

    const { type, payload } = action

    switch (type) {
        case GET_JOBS:
            return {
                ...state,
                jobs: payload
            }
        case GET_JOBERROR:
            return {
                ...state,
                errorCode: payload
            }
        default:
            return state
    }

}
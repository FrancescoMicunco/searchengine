export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBERROR = 'GET_JOBERROR'

export const addToFav = (company) => ({
    type: ADD_TO_FAV,
    payload: company
})

export const removeFromFav = (company) => ({
    type: REMOVE_FROM_FAV,
    payload: company
})

export const getJobs = () => {
    return async(dispatch) => {
        try {
            let resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?=search${search}')
            if (resp.ok) {
                console.log(resp)
                let jobs = await resp.json()
                dispatch({
                    type: GET_JOBS,
                    payload: jobs,
                })
            } else {

                dispatch({
                    type: GET_JOBERROR,
                    payload: resp.status,
                })
                console.log('error')
            }
        } catch (error) {
            console.log(error)
        }
    }
}
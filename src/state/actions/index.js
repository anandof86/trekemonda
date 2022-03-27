export const depositCollection = (amount) => {
    return(dispatch) =>{
        dispatch({
            type: "deposit",
            payload : amount
        })
    }
}

export const withdrawCollection = (amount) => {
    return(dispatch) =>{
        dispatch({
            type: "withdraw",
            payload : amount
        })
    }
}

export const loginUser = (data) => {
    return(dispatch) =>{
        dispatch({
            type: "login",
            payload : data
        })
    }
}

export const logoutUser = (data) => {
    return(dispatch) =>{
        dispatch({
            type: "logout",
            payload : data
        })
    }
}
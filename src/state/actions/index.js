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
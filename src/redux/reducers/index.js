const initialState = {
    myProfile: {

    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MYPROFILE":
            return {
                ...state,
                myProfile: action.payload
            }
        default:
            return state
    }
}

export default mainReducer
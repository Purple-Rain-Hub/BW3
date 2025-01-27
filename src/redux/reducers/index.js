const initialState = {
    myProfile: {

    },
    experience: []
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MYPROFILE":
            return {
                ...state,
                myProfile: action.payload
            }
        case "GET_EXPERIENCE":
            return {
                ...state,
                experience: action.payload
            }
        default:
            return state
    }
}

export default mainReducer
const initialState = {
  myProfile: {},
  experience: [],
  posts: [],
  newExperienceId: {},
  expForPut: {}
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MYPROFILE":
      return {
        ...state,
        myProfile: action.payload,
      };
    case "GET_EXPERIENCE":
      return {
        ...state,
        experience: action.payload,
      };
    case "GET_ALLPOSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "NEWEXPERIENCE_ID":
      return {
        ...state,
        newExperienceId: action.payload
      }
    case "GET_EXPFORPUT":
      return {
        ...state,
        expForPut: action.payload
      }
    default:
      return state;
  }
};

export default mainReducer;

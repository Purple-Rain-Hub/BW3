const initialState = {
  myProfile: {},
  experience: [],
  posts: [],
  postedPostId: "",
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
    case "GET_POSTEDPOST_ID":
      return {
        ...state,
        postedPostId: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;

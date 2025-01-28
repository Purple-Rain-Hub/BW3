const myID = "6797508916f6350015fecb84";
const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NTA4OTE2ZjYzNTAwMTVmZWNiODQiLCJpYXQiOjE3Mzc5Njk4MDEsImV4cCI6MTczOTE3OTQwMX0.gV22i7NwH_DHYfKE81N9UEY1Up6WHrH2EPIoPu8OD9w";
export const getMyProfile = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + myID,
        {
          headers: {
            Authorization: "Bearer " + myToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: "GET_MYPROFILE",
          payload: data,
        });
      } else {
        throw new Error("errore nella response di getMyProfile");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

export const getExperience = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          myID +
          "/experiences",
        {
          headers: {
            Authorization: "Bearer " + myToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: "GET_EXPERIENCE",
          payload: data,
        });
      } else throw new Error("errore nella resposne di getExperience");
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: "Bearer " + myToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: "GET_ALLPOSTS",
          payload: data,
        });
      } else {
        throw new Error("errore nella response di getAllPosts");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

export const sendPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify({ text: post }),
          headers: {
            Authorization: "Bearer " + myToken,
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(getAllPosts());
        // dispatch({
        //   type: "GET_ALLPOSTS",
        //   payload: data,
        // });
      } else {
        throw new Error("errore nella response di sendPost");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

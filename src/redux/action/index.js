
export const myID = "6797508916f6350015fecb84";
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

export const postPropic = (propicData) => {
  return async () => {
    console.log(propicData);

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
        myID +
        "/picture",
        {
          method: "POST",
          body: propicData,
          headers: {
            Authorization: "Bearer " + myToken,
          },
        }
      );
      if (response.ok) {
        console.log(response);
      } else throw new Error("errore nel POST della propic");
    } catch (error) {
      console.error(error);
    }
  };
};

export const postExperience = (experienceData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
        myID +
        "/experiences",
        {
          method: "POST",
          body: JSON.stringify(experienceData),
          headers: {
            Authorization: "Bearer " + myToken,
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      if (response.ok) {
        const data = await response.json()
        dispatch({
          type: "NEWEXPERIENCE_ID",
          payload: data._id
        });
        dispatch(getExperience());
      }
      else throw new Error("errore nel POST della experience");
    } catch (error) {
      console.error(error);
    }
  };
};

export const postExpPic = (expPicData, expId) => {
  return async (dispatch) => {
    console.log("GUARDA QUESTI DUE LOG SOTTO!!!!!!!!!!!!");

    console.log(expPicData);
    console.log(expId);

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + myID + "/experiences/" + expId + "/picture", {
        method: "POST",
        body: expPicData,
        headers: {
          "Authorization": "Bearer " + myToken,
        }
      }
      )
      if (response.ok) {
        console.log(response);
        dispatch(getExperience());
      }
      else throw new Error("errore nel POST della expPic")
    } catch (error) {
      console.error(error)
    }
  }
}

export const getExpForPut = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + myID + "/experiences/" + id, {
        headers: {
          Authorization: "Bearer " + myToken,
        },
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data);
        dispatch({
          type: "GET_EXPFORPUT",
          payload: data
        })
      }
      else throw new Error("errore nella get della exp per il PUT");
    } catch (error) {
      console.error("ERRORE:" + error)
    }
  }
}

export const putExperience = (exp, id) => {
  return async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + myID + "/experiences/" + id._id, {
        method: "PUT",
        body: JSON.stringify(exp),
        headers: {
          "Authorization": "Bearer " + myToken,
          "Content-type": "application/json; charset=UTF-8",
        }
      })
      if (response.ok) {
        console.log("PUTEXP RESPONSE" + response)
      }
      else throw new Error("errore nella PUT dell'experience");
    } catch (error) {
      console.error("ERRORE:", error)
    }
  }
}

export const deleteExp = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + myID + "/experiences/" + id, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + myToken,
        }
      })
      if (response.ok) {
        dispatch({ type: "SHOW_EXPERIENCE_DEL", payload: { show: false, id: "" } });
        dispatch(getExperience());
      }
      else throw new Error("errore nella delete dell'exp");
    }
    catch (error) {
      console.error("ERRORE:", error)
    }
  }
}

export const putProfile = (profile) => {
  return async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
          "Authorization": "Bearer " + myToken,
          "Content-type": "application/json; charset=UTF-8",
        }
      })
      if (response.ok) {
        console.log("PUT PROFILE RESPONSE" + response)
      }
      else throw new Error("errore nella PUT dell'profile");
    } catch (error) {
      console.error("ERRORE:", error)
    }
  }
}

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
        if (data) {
          dispatch({
            type: "GET_POSTEDPOST_ID",
            payload: data._id,
          });
        }
      } else {
        throw new Error("errore nella response di sendPost");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postId,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + myToken,
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        console.log("Rimosso");
        dispatch(getAllPosts());
      } else {
        throw new Error("errore nella response di deletePost");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

export const modifyPost = (postId, text) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postId,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + myToken,
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ text: text }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(getAllPosts());
      } else {
        throw new Error("errore nella response di modifyPost");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

export const setPostPic = (pic, postId) => {
  const URL = "https://striveschool-api.herokuapp.com/api/posts/" + postId;
  console.log(URL);
  return async (dispatch) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: pic,
        headers: {
          Authorization: "Bearer " + myToken,
        },
      });
      if (response.ok) {
        //const data = await response.json();
        //console.log(data);
        // dispatch({ type: "GET_POSTEDPOST_ID", payload: data._id });
        dispatch(getAllPosts());
      } else {
        throw new Error("errore nella response di setPostPic");
      }
    } catch (error) {
      console.error("ERRORE FETCH:" + error);
    }
  };
};

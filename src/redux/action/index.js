const myID = "6797508916f6350015fecb84";
const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NTA4OTE2ZjYzNTAwMTVmZWNiODQiLCJpYXQiOjE3Mzc5Njk4MDEsImV4cCI6MTczOTE3OTQwMX0.gV22i7NwH_DHYfKE81N9UEY1Up6WHrH2EPIoPu8OD9w"
export const getMyProfile = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/" + myID,
                {
                    headers: {
                        "Authorization": "Bearer " + myToken,
                    },
                }
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                dispatch({
                    type: "GET_MYPROFILE",
                    payload: data
                });
            } else {
                throw new Error("errore nella response di getMyProfile");

            }
        } catch (error) {
            console.error("ERRORE FETCH:" + error)
        }
    }

};
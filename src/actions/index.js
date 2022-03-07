import jsonPlaceholder from "../apis/jsonPlaceholder";

// create inner function for API hit
export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/post");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// could be written as below:

// export const fetchPost = () => {
//   return async function (dispatch) {
//     const promise = await jsonPlaceholder.get("/post");
//   };
//   dispatch({ type: "FETCH_POSTS", payload: response });
// };

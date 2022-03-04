import jsonPlaceholder from "../apis/jasonPlaceholder";

// create inner function for API hit
export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/post");
};
dispatch({ type: "FETCH_POSTS", payload: response });

// could be written as below:

// export const fetchPost = () => {
//   return async function (dispatch) {
//     const promise = await jsonPlaceholder.get("/post");
//   };
//   dispatch({ type: "FETCH_POSTS", payload: response });
// };

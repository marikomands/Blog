import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch) => {
  console.log("About to Fetch", fetchPosts);
  await dispatch(fetchPosts());
  console.log("Fetched Posts");
};

// create inner function for API hit
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
  // console.log(response.data);
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
  // console.log(response.data);
};

// export const fetchUser = (id) => async (dispatch) => {
//   return _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
//   console.log(response.data);
// });
// could be written as below:

// export const fetchPost = () => {
//   return async function (dispatch) {
//     const promise = await jsonPlaceholder.get("/post");
//  dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// }

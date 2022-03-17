import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// action creator inside action creator:  need to dispatch manually again
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  console.log(getState().posts);

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log("🚀 ~ fetchPostsAndUsers ~ userIds", userIds);
  // userIds.forEach((id) => dispatch(fetchUser(id)));
  // console.log("🚀 ~ fetchPostsAndUsers ~ userIds", userIds);

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

// create inner function for API hit with Redux-Thunk
// Redux-Thunk required for async await      not for promise but Redux process will be finished sonner than promise and not to be used.
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
  // console.log(response.data);
};

//users情報の取得
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
  console.log(response);
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

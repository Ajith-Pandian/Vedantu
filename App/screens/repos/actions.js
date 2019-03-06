import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  CHANGE_SEARCH_TERM
} from "./constants";
import Api from "../../api";

// export function onLogin(phoneNum) {
//   return dispatch => {
//     dispatch(_fetchRepos());
//     Api.getRepos().then(res => {
//       if (res) {
//         dispatch(_fetchReposSuccess(res.repos));
//       } else dispatch(_fetchReposFailure("Error"));
//     });
//   };
// }

export function _fetchRepos() {
  return {
    type: FETCH_REPOS
  };
}

export function _fetchReposSuccess(repos) {
  return {
    type: FETCH_REPOS_SUCCESS,
    repos
  };
}

export function _fetchReposFailure() {
  return {
    type: FETCH_REPOS_FAILURE
  };
}

export function _changeSearchTerm(searchTerm) {
  return {
    type: CHANGE_SEARCH_TERM,
    searchTerm
  };
}

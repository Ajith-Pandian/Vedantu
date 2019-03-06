import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
  CHANGE_SEARCH_TERM
} from "./constants";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  repos: []
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      };
    case FETCH_REPOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        repos: action.repos
      };
    }
    case FETCH_REPOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true
      };
    }
    case CHANGE_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    }

    default:
      return state;
  }
}

import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE
} from "./constants";

import { _fetchRepos, _fetchReposSuccess, _fetchReposFailure } from "./actions";

import Api from "../../api";

export function* fetchRepos(action) {
  try {
    const results = yield call(Api.getRepos);
    const { repos } = results;
    if (repos) yield put(_fetchReposSuccess(repos));
    else yield put(_fetchReposFailure("Aww!!!!"));
  } catch (err) {
    console.log(err);
    yield put(_fetchReposFailure(String(err)));
  }
}

export default function* reposSaga() {
  yield takeLatest(FETCH_REPOS, fetchRepos);
}

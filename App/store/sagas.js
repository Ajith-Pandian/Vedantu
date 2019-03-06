import { all, takeLatest } from "redux-saga/effects";

import reposSaga from "../screens/repos/saga";

export default function* rootSaga() {
  yield all([reposSaga()]);
}

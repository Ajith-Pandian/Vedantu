import { combineReducers } from "redux";

import reposReducer from "../screens/repos/reducer";

const rootReducer = combineReducers({
  repos: reposReducer
});

export default rootReducer;

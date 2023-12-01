// 当前路径：src/LearningSaga/reducer/index.js

import { combineReducers } from "redux";

// 保存登录之后的信息到store
function setLoginInfoReducer(state = {}, action = {}) {
  switch (action.type) {
    case "loginSuccess":
      return { ...state, ...action.loginInfo };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ loginInfo: setLoginInfoReducer });

export default rootReducer;

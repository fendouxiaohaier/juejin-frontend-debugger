// 当前路径：src/LearningSaga/saga/index.js

import {
  all,
  put,
  take,
  takeLatest,
  call,
  fork,
  cancel,
  delay,
  takeEvery,
  select,
} from "redux-saga/effects";
import { loginService, inviteInfoService } from "../api/index";

// 登录功能saga
function* login(action) {
  try {
    // 调用我们的登录接口，获取登录成功失败的信息
    const loginInfo = yield call(loginService, action.account);
    // 如果登录成功，更新store中的loginInfo
    yield put({ type: "loginSuccess", loginInfo });
  } catch (error) {
    // 登录失败 弹出登录失败的message
    alert(error.msg);
  }
}
// 登出功能saga，更新store中的loginInfo为{ success: false }
function* loginOut() {
  console.log("点击登出");
  
  const state = yield select((state) => state);
  console.log('打印日志看看-state:', state)
  // 上面这句相当于获取state
  // const state = yield select();
  
  yield put({
    type: "loginSuccess",
    loginInfo: { success: false, name: "", password: "" },
  });
}

function* getInviteInfo() {
  // 2.1，获取招聘信息
  const inviteInfo = yield call(inviteInfoService);
  // 2.2，输出至控制台
  console.log("招人啦：", inviteInfo);
}

function* forkTask() {
  try {
    // 2.1，延迟2s控制台打印 'forkTask finished'
    yield delay(2000);
    console.log("forkTask finished");
  } catch (error) {
    // 2.2，如果出错则控制台打印 'error'
    console.log("error");
  } finally {
    // 2.3，forkTask不管以怎样形式结束都将执行finally区块内部内容
    console.log(
      "当task以任意方式结束，不管是正常结束，抛错结束，还是当前任务取消结束，finnally都将执行"
    );
  }
}
function* cancelFork() {
  // 2，cancelFork使用fork启动一个非阻塞的任务forkTask
  const task = yield fork(forkTask);
  // 3，延迟1s
  yield delay(1000);
  // 4，取消任务forkTask
  yield cancel(task);
}

// watchLogin 监听登录action（type:login）与登出action（type:loginOut），并执行对应的saga
function* watchLogin() {
  // 1，根saga启动cancelFork任务
  yield call(cancelFork);

  // call 是阻塞的，后面的effect都没有反应，改为fork就可以了
  // yield call(getInviteInfo);
  yield fork(getInviteInfo);

  // yield takeLatest("login", login);
  yield takeEvery("login", login);
  // 0，去掉之前使用takeLatest完成的对 类型为loginOut的action的监听
  // yield takeLatest('loginOut', loginOut)
  // 1，使用take等待类型loginOut的action的到来，take将阻塞当前Generator
  yield take("loginOut");
  // 2，take监听到类型loginOut的action，执行yield call(loginOut)，即继续登出操作
  yield call(loginOut);
}

// rootSaga负责启动watchLogin
function* rootSaga() {
  yield all([watchLogin()]);
}
export default rootSaga;

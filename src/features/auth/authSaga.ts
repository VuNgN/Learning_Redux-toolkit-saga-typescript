import {PayloadAction} from '@reduxjs/toolkit';
import {push} from 'connected-react-router';
import {call, delay, fork, put, take} from 'redux-saga/effects';
import {authAction, LoginPayLoad} from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield delay(1000);
    localStorage.setItem('access_token', 'hihi');
    yield put(authAction.loginSuccess({
      id: 1,
      name: 'hello'
    }));
    yield put(push('./admin/dashboard'));
  } catch (e) {
    yield put(authAction.loginFailed(e.message))
  }
}
function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }


    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

export default function* AuthSaga() {
  yield fork(watchLoginFlow);
}

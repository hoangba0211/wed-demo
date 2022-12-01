import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { usersActions } from './index';

function* loginUser(action) {
  console.log('action saga');
  try {
    console.log('loginUser');
    const user = yield axios.post('https://ttvnapi.com/v1/login', {
      username: action.payload.username,
      password: action.payload.password,
    });
    yield put(
      usersActions.loginSuccess({
        username: action.payload.username,
        password: action.payload.password,
        token: user.data.data.token,
        id: user.data.data.id,
      }),
    );
    console.log(user);
  } catch (err) {
    console.log(err);
    yield put(usersActions.loginFail);
  }
}
export function* useUserFromSaga() {
  yield takeLatest(usersActions.login.type, loginUser);
}

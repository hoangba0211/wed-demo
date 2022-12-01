import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { headerUiActions } from '.';

function* loginUser(action) {
  try {
    const user = yield axios.post('https://ttvnapi.com/v1/login', {
      username: action.payload.username,
      password: action.payload.password,
    });
    console.log(11, user);
    yield put(
      headerUiActions.loginSuccess({
        username: action.payload.username,
        password: action.payload.password,
        id: user.data.data.id,
      }),
    );
  } catch (err) {
    console.log(err);
    yield put(headerUiActions.loginFail);
  }
}
export default function* HeaderUiSaga() {
  yield [takeLatest(headerUiActions.loginSuccess.type, loginUser)];
}

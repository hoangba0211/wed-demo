import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useUserFromSaga } from './saga';

import { HeaderUiState } from './type';

export const initialState: HeaderUiState = {
  username: '',
  password: '',
  token: '',
  id: 0,
  loading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login(state: HeaderUiState, action: { payload: HeaderUiState }) {
      console.log('first');
      state.loading = true;
    },
    loginSuccess(state: HeaderUiState, action: { payload: HeaderUiState }) {
      console.log(action.payload);
      console.log('loginSuccess 1');
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.loading = false;
      localStorage.setItem('user', JSON.stringify(state));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    loginFail(state: HeaderUiState) {
      console.log('loginFail 1');
      state.loading = false;
    },
    logout(state: HeaderUiState) {
      state.username = '';
      state.password = '';
      state.id = 0;
    },
  },
});

export const { actions: usersActions, reducer } = slice;

export const useHeaderUiSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: useUserFromSaga });
  return { actions: slice.actions };
};

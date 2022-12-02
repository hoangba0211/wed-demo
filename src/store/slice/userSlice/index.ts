import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useUserFromSaga } from './saga';

import { HeaderUiState } from './type';

export const initialState: HeaderUiState = {
  username: '',
  password: '',
  token: '' || localStorage.getItem('token'),
  id: 0,
  loading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login(state: HeaderUiState, action: { payload: HeaderUiState }) {
      state.loading = true;
    },
    loginSuccess(state: HeaderUiState, action: { payload: HeaderUiState }) {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.loading = false;
      localStorage.setItem('user', JSON.stringify(state));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    loginFail(state: HeaderUiState) {
      state.loading = false;
    },
    logout(state: HeaderUiState) {
      state.username = '';
      state.password = '';
      state.token = '';
      state.id = 0;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
});

export const { actions: usersActions, reducer } = slice;

export const useHeaderUiSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: useUserFromSaga });
  return { actions: slice.actions };
};

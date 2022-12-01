import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import HeaderUiSaga from './saga';
import { HeaderUiState } from './type';

export const initialState: HeaderUiState = {
  username: '',
  password: '',
  id: 0,
  loading: false,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      console.log(action.payload);
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.loading = false;
    },
    loginFail: (state: HeaderUiState) => {
      state.loading = false;
    },
    logout: state => {
      state.username = '';
      state.password = '';
      state.id = 0;
    },
  },
});
export const { actions: headerUiActions } = slice;

export const useHeaderUiSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: HeaderUiSaga });
  return { actions: slice.actions };
};

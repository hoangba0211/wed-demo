import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.users || initialState;

export const getUsersSelector = createSelector(
  [selectDomain],
  userSelector => userSelector.username,
);
export const getTokenSelector = createSelector(
  [selectDomain],
  userSelector => userSelector.token,
);

export const getLoadingSelector = createSelector(
  [selectDomain],
  userSelector => userSelector.loading,
);

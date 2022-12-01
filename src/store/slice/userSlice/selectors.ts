import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';

const selectDomain = state => state?.users || initialState;

export const getUsersSelector = createSelector(
  [selectDomain],
  userSelector => userSelector.username,
);

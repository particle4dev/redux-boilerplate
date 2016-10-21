/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectLoading = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('loading')
);
const selectError = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('error')
);
const selectNewTaskUIState = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('newTaskUIState')
);
const selectList = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('list')
);

export {
  selectLoading,
  selectError,
  selectList,
  selectNewTaskUIState
};
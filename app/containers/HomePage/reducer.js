/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS, List, Record } from 'immutable';
import { handleActions } from 'redux-actions';

import { guid } from '../../utils/guid';
import {
  LOAD_TASKS,
  LOAD_TASKS_SUCCESS,
  LOAD_TASKS_ERROR,
  OPEN_NEWTASK,
  CREATE_NEWTASK,
  CREATE_NEWTASK_SUCCESS,
  CREATE_NEWTASK_ERROR,
  REMOVE_TASK,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_ERROR,
  UPDATE_TASK
} from './constants';

// The initial state of the App
export const TasksState = new Record({
  filter: '',
  loading: false,
  error: false,
  newTaskUIState: false,
  list: new List([])
});
const initialState = new TasksState();

const homeReducer = handleActions({
  [LOAD_TASKS]: (state, {}) => {
    return state.set('loading', true);
  },
  [LOAD_TASKS_SUCCESS]: (state, { payload: {list} }) => {
    return state.set('loading', false)
    .set('list', new List(list));
  },
  [OPEN_NEWTASK]: (state, { payload: { value } }) => {
    return state.set('newTaskUIState', value); 
  },
  [CREATE_NEWTASK]: (state, { payload: { title } }) => {
    return state.set('loading', true);
  },
  [CREATE_NEWTASK_SUCCESS]: (state, { payload: { data } }) => {
    return state
    .set('loading', false)
    .set('list', state.list.unshift(data));
  },
  [REMOVE_TASK]: (state, { payload: { _id } }) => {
    return state.set('loading', true);
  },
  [REMOVE_TASK_SUCCESS]: (state, { payload: { _id } }) => {
    return state
    .set('loading', false)
    .set('list', state.list.filter(task => {
      return task._id !== _id;
    }));
  },
  [UPDATE_TASK]: (state, { payload: { _id, done } }) => {
    return state.set('loading', true);
    // return state.set('list', state.list.map(task => {
    //   return task._id === _id ? {
    //     _id,
    //     title: task.title,
    //     done
    //   } : task;
    // }));
  },
}, initialState);
export default homeReducer;
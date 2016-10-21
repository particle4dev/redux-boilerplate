/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */
import { createAction } from 'redux-actions';

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
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
} from './constants';

export const openNewTask = createAction(OPEN_NEWTASK, (value) => ({
  value: !value
}));

export const createNewTask = createAction(CREATE_NEWTASK, (title) => ({
  title
}));

export const createNewTaskSuccess = createAction(CREATE_NEWTASK_SUCCESS, ({ data }) => ({
  data
}));

export const createNewTaskError = createAction(CREATE_NEWTASK_ERROR, (error) => ({
  error
}));

export const removeTask = createAction(REMOVE_TASK, (_id) => ({
  _id
}));

export const removeTaskSuccess = createAction(REMOVE_TASK_SUCCESS, ({ _id }) => ({
  _id
}));

export const removeTaskError = createAction(REMOVE_TASK_ERROR, (error) => ({
  error
}));

export const updateTask = createAction(UPDATE_TASK, (_id, done) => ({
  _id, done
}));

export const updateTaskSuccess = createAction(UPDATE_TASK_SUCCESS, (_id, done) => ({
  _id, done
}));

export const updateTaskError = createAction(UPDATE_TASK_ERROR, (_id, error) => ({
  _id, error
}));

export const loadTasks = createAction(LOAD_TASKS, () => ({}));

export const tasksLoaded = createAction(LOAD_TASKS_SUCCESS, (list) => ({
  list
}));

export const tasksLoadingError = createAction(LOAD_TASKS_ERROR, (error) => ({
  error
}));

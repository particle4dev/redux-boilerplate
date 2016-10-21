/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_TASKS = 'boilerplate/HomePage/LOAD_TASKS';
export const LOAD_TASKS_SUCCESS = 'boilerplate/HomePage/LOAD_TASKS_SUCCESS';
export const LOAD_TASKS_ERROR = 'boilerplate/HomePage/LOAD_TASKS_ERROR';

export const OPEN_NEWTASK = 'boilerplate/HomePage/OPEN_NEWTASK';

export const CREATE_NEWTASK = 'boilerplate/HomePage/CREATE_NEWTASK';
export const CREATE_NEWTASK_SUCCESS = 'boilerplate/HomePage/CREATE_NEWTASK_SUCCESS';
export const CREATE_NEWTASK_ERROR = 'boilerplate/HomePage/CREATE_NEWTASK_ERROR';

export const REMOVE_TASK = 'boilerplate/HomePage/REMOVE_TASK';
export const REMOVE_TASK_SUCCESS = 'boilerplate/HomePage/REMOVE_TASK_SUCCESS';
export const REMOVE_TASK_ERROR = 'boilerplate/HomePage/REMOVE_TASK_ERROR';

export const UPDATE_TASK = 'boilerplate/HomePage/UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'boilerplate/HomePage/UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_ERROR = 'boilerplate/HomePage/UPDATE_TASK_ERROR';

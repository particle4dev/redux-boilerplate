import { takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel } from 'redux-saga/effects';
import request from 'utils/request';
import {
  tasksLoaded,
  tasksLoadingError,
  createNewTaskSuccess,
  createNewTaskError,
  removeTaskSuccess,
  removeTaskError
} from './actions';
import {
  LOAD_TASKS,
  CREATE_NEWTASK,
  REMOVE_TASK,
  UPDATE_TASK
} from './constants';

export function* getTasks() {
  // Select username from store
  const requestURL = `http://localhost:4000/todos`;

  const repos = yield call(request, requestURL);
  if (!repos.err) {
    yield put(tasksLoaded(repos.data));
  } else {
    yield put(tasksLoadingError(repos.err));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetTasksAsync() {
  yield takeEvery(LOAD_TASKS, getTasks);
}

export function* insertNewTask({ payload: { title } }) {
  // Select username from store
  const requestURL = `http://localhost:4000/todos`;
  const repos = yield call(request, requestURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title
    })
  });
  if (!repos.err) {
    yield put(createNewTaskSuccess(repos.data));
  } else {
    yield put(createNewTaskError(repos.err));
  }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchInsertNewTask() {
  yield takeEvery(CREATE_NEWTASK, insertNewTask);
}

export function* deleteTask({payload: { _id }}) {
  // Select username from store
  const requestURL = `http://localhost:4000/todos/${_id}`;
  const {data: { success }} = yield call(request, requestURL, {
    method: 'DELETE'
  });
  if (success) {
    yield put(removeTaskSuccess({
      _id
    }));
  }
  // else {
    // yield put(removeTaskError({}));
  // }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchDelteTask() {
  yield takeEvery(REMOVE_TASK, deleteTask);
}

export function* updateTask({payload: { _id, done }}) {
  // Select username from store
  const requestURL = `http://localhost:4000/todos/${_id}`;
  const {data: { success }} = yield call(request, requestURL, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      done
    })
  });
  if (success) {
    yield put(removeTaskSuccess({
      _id,
      done
    }));
  }
  // else {
    // yield put(removeTaskError({}));
  // }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK, deleteTask);
}

// Your sagas for this container
export default [
  watchGetTasksAsync,
  watchInsertNewTask,
  watchDelteTask,
  watchUpdateTask
];

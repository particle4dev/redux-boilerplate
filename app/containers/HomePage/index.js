/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import LinearProgress from 'material-ui/LinearProgress';

import Row from 'components/Row';
import AddButton from 'components/AddButton';
import NewTask from 'components/NewTask';
import Container from 'components/Container';
import Title from 'components/Title';
import messages from './messages';
import {
  selectList,
  selectLoading,
  selectError,
  selectNewTaskUIState
} from './selectors';
import {
  loadTasks,
  openNewTask,
  createNewTask,
  removeTask,
  updateTask
} from './actions';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.props.loadTasks();
  }
  render() {
    const { list, loading, error, newTaskUIState, openNewTask, createNewTask, removeTask, updateTask } = this.props;
    let taskItems = list.map((task, index) => {
      return (
        <Row key={index} _id={task._id} title={task.title} done={task.done} onRemove={removeTask} onUpdate={updateTask}></Row>
      );
    });

    let mainContent = null;

    // Show a loading indicator when we're loading
    if (loading) {
      mainContent = (<LinearProgress mode="indeterminate" />);
    }
    /**
    // Show an error if there is one
    else if (error !== false) {
      const ErrorComponent = () => (
        <ListItem item={'Something went wrong, please try again!'} />
      );
      mainContent = (<List component={ErrorComponent} />);
    }
    // If we're not loading, don't have an error and there are repos, show the repos
    else if (this.props.repos !== false) {
      mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    }
    */
    return (
      <Container>
        <AddButton uiState={ newTaskUIState } onClick={ openNewTask } />
        <Title />
        { mainContent }
        <NewTask open={ newTaskUIState } onClick={ createNewTask }/>
        <ul className="ui-sortable">
          { taskItems }
        </ul>
      </Container>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadTasks: () => dispatch(loadTasks()),
    removeTask: (value) => dispatch(removeTask(value)),
    updateTask: (_id, done) => dispatch(updateTask(_id, done)),
    createNewTask: (evt, value) => {evt.preventDefault(); dispatch(createNewTask(value)) },
    openNewTask: (value) => dispatch(openNewTask(value)),
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  list: selectList(),
  loading: selectLoading(),
  error: selectError(),
  newTaskUIState: selectNewTaskUIState()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

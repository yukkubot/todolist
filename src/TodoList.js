import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
        toggleStatus={this.props.toggleStatus}
      />
    )

    return(
        <ul className="todolist">
          {todos}
        </ul>
    );
  }
}

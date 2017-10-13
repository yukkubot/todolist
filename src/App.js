import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

export default class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      todos: todos,
      todoCount: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.text.value === "") return false
    const text = e.target.text.value
    const todos = this.state.todos.slice()
    const todoCount = this.state.todoCount
    todos.push({
      id: todoCount,
      text: text,
      done: false
    });
    this.setState({ todos })
    this.setState({ todoCount: todoCount + 1 })
    e.target.text.value = ''
  }

  toggleStatus(clickTodo) {
    const todos = this.state.todos.slice()
    const todo = todos[clickTodo.id - 1]
    todo.done = !todo.done
    todos[clickTodo.id - 1] = todo
    this.setState({ todos });
  }

  render() {
    return (
      <div className="app">
        <h1>TODOアプリ</h1>
        <TodoForm handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          toggleStatus={this.toggleStatus.bind(this)}
        />
      </div>
    );
  }
}

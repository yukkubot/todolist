import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="text" type="text" placeholder="TODOを入力してください" defaultValue="" />
        </form>
      </div>
    )
  }
}

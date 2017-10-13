import React, { Component } from 'react';

export default class Todo extends Component {

  render() {
    const className = this.props.done ? 'done' : 'undone'
    const id = "checkbox" + this.props.id
    return(
      <li className={className}>
        <input id={id} type="checkbox" checked={this.props.done} onChange={(e) => {this._onChange(e)}} />
        <label htmlFor={id} className="checkbox">{this.props.text}</label>
      </li>
    );
  }

  _onChange(e) {
    // checkbox では、preventDefault() すると反映されない？
    this.props.toggleStatus(this.props)
  }

}

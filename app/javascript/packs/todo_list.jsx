import React from 'react'
import PropTypes from 'prop-types'

export default class TodoList extends React.Component {
  render(){
    const data = this.props.data;
    const listItems = data.map((item) =>
      <li className={item.completed ? 'complete' : ''} key={item.id}>
        <span>{item.description}</span>
      </li>
    );

    return(
      <ul className="todo-list">
        {listItems}
      </ul>
    )
  }
}
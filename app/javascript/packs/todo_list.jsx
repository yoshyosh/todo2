import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

export default class TodoList extends React.Component {
  render(){
    const data = this.props.data;
    const listItems = data.map((item) =>
      <Todo id={item.id} description={item.description} completed={item.completed} />
    );

    return(
      <ul className="todo-list">
        {listItems}
      </ul>
    )
  }
}
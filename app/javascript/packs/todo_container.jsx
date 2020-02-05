import React from 'react'
import PropTypes from 'prop-types'
import TodoList from './todo_list'

export default class TodoContainer extends React.Component {
  render(){
    const data = [
      {
        "id": 1,
        "description": "Get spaghetti supplies",
        "completed": false
      },
      {
        "id": 2,
        "description": "Get spaghetti supplies",
        "completed": false
      },
      {
        "id": 3,
        "description": "Get spaghetti supplies",
        "completed": true
      },
      {
        "id": 4,
        "description": "Get spaghetti supplies",
        "completed": true
      },
      {
        "id": 5,
        "description": "Get spaghetti supplies",
        "completed": false
      }
    ];

    return (
      <div className="todo-container">
        <TodoList data={data} />
        <input type="text" placeholder="enter your todo" />
        <button>Submit</button>
      </div>
    );
  }
}
import React from 'react'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  render(){
    return(
      <li className={this.props.completed ? 'complete' : ''} key={this.props.id}>
        <span>{this.props.description}</span>
      </li>
    )
  }
}
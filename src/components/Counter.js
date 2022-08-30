import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const {username} = this.props
    return (
      <div>{username}</div>
    )
  }
}

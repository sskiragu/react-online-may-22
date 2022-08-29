import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increaseCounter = () => {
        this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <div>
        <h1>Counter App using Class component</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increaseCounter}>Increase Count</button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>Decrease Count</button>
      </div>
    )
  }
}

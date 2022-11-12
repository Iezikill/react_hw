import React from 'react'

export class Form extends React.Component {
  state = {
    count: 1,
    name: 'geekbrains',
    arr: ['ivanov', 'petrov', 'sidorov']
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      {this.state.arr.map((item, idx) => {
        return <div>{item}</div>
      })}
      <input type="text" onChange={this.handleChangeName} name="login" />
      <input type="text" name="password" />
      <button>send form</button>
    </form>
  }
}
import React from 'react'

export class Form extends React.Component {
  state = {
    name: 'geekbrains'
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.name)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChangeName} />
      <button>send form</button>
    </form>
  }
}
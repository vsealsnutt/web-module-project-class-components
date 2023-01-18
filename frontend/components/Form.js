import React from 'react'

export default class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAdd();
  }

  render() {
    return (
      <form>
        <input/>
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    )
  }
}

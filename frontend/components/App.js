import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <h2>todos:</h2>

        <ul>
          <li>Walk the dog</li>
          <li>Learn React</li>
          <li>Havefun</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}

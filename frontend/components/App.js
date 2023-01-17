import React from 'react'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Walk the dog',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Learn React',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Have fun',
          id: 1528817098522,
          completed: false
        }
      ]
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todos:</h1>

        <ul>
          {
            todos.map(todo => {
              return (<li>{todo.name} { todo.completed ? <span>- completed</span> : <span></span> }</li>)
            })
          }
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

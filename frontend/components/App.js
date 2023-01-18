import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

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

  handleAdd = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todos:</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos} />

        <Form handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}

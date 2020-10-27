import React, { Component } from 'react'
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [{task: "Split the psyche"},{task: "Speak to the spirit of the times"}]}
  }
  render() {
    const todos = this.state.todos.map(todo =>{
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>
          <li>Todo 1</li>
          <li>{todos}</li>
        </ul>
      </div>
    )
  }
}
export default TodoList;
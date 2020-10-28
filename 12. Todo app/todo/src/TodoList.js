import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  render() {
    const todos = this.state.todos.map(todo =>{
      return <Todo 
        key={todo.id} 
        task={todo.task} 
        id={todo.id} 
        removeTodo={this.remove}/>;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>
          <li><NewTodoForm createTodo={this.create}/></li>
          <li>{todos}</li>
        </ul>
      </div>
    )
  }
}
export default TodoList;
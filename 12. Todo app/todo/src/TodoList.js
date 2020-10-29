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
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
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
  update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, task: updatedTask};
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  }
  toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed};
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  }
  render() {
    const todos = this.state.todos.map(todo =>{
      return <Todo 
        key={todo.id} 
        task={todo.task} 
        completed={todo.completed}
        id={todo.id} 
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />;
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
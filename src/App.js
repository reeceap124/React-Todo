import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const todos = [
  {
    name: 'Be Awesome',
    id: 123,
    completed: true
  },
  {
    name: 'Keep being awesome',
    id: 124,
    completed: false
  }
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  addTodo = newTodoText => {
    const newTodo = {
      name: newTodoText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = id => {

    let todos = this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    })

    this.setState({todos})

  }

  clearCompleted= () => {
    const filtered =  this.state.todos.filter(todo => todo.completed === false);
    this.setState({todos: filtered})
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <div>
          <TodoList todos={this.state.todos} clearCompleted={this.clearCompleted} onClick toggleCompleted={this.toggleCompleted}/>
        </div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(res => {
        this.setState({
          todos: res
        });
      });
  }

  addTodo(newTodo) {
    const postOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: newTodo.id,
        task: newTodo.task,
        isCompleted: newTodo.isCompleted
      })
    };
    fetch('/api/todos', postOptions)
      .then(res => res.json())
      .then(res => {
        this.setState({
          todos: this.state.todos.concat(res)
        });
      });
  }

  toggleCompleted(todoId) {
    for (let i = 0; i < this.state.todos.length; i++) {
      let checkForCompletion = false;
      if (this.state.todos[i].id === todoId) {
        if (!(this.state.todos[i].isCompleted)) {
          checkForCompletion = true;
        }
        const patchOptions = {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            isCompleted: checkForCompletion
          })
        };

        fetch(`/api/todos/${todoId}`, patchOptions)
          .then(res => res.json())
          .then(res => {
            this.state.todos.splice(i, 1, res);
            this.setState({
              todos: this.state.todos
            });
          });
      }

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

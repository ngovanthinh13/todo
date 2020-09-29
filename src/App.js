
import React, { Component } from 'react';
import TodoList from './Todolist'
import TodoItems from './TodoItem'
import RemoveTodolist from './RemoveTodolist'

class App extends Component {
  //const message = "Hello React";
  constructor(props) {
    super(props)
    this.state = { todos: [], text: '' };
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(e) {
    e.preventDefault();
    this.setState({ 
      todos: [ this.state.text, ...this.state.todos ],
      text: ''
    });
    
  }
  removeTodo(name, i){
    let todos = this.state.todos.slice();
    todos.splice(i, 1);
    this.setState({
        todos
    });
}

  updateValue(e) {
    this.setState({ text: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <div>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                <RemoveTodolist todos={this.state.todos} removeTodo={this.removeTodo}/>
            </div>
        {/* <TodoList addItem={this.addItem}  /> */}
        {/* // <TodoItems entries={this.state.items} />  */}
      </div>
    );
  }
}
export default App;
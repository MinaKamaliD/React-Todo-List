import React from "react";
import "./AddTodo.css";
import { Component } from "react";

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      todo: {
        id: "",
        title: "",
        status: "",
      },
      todos: [],
      completedTodos: [],
    };
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    // this.addToListHandler = this.addToListHandler.bind(this);
    this.completeTodoHandler = this.completeTodoHandler.bind(this);
  }
  submitHandler(event) {
    event.preventDefault();

    if (this.state.todo.title) {
      let addedTodo = {
        id: this.state.todos.length + 1,
        title: this.state.todo.title,
        status: this.state.todo.status,
      };
      this.setState((prevState) => {
        return { todos: [...prevState.todos, addedTodo] };
      });
      this.setState({
        todo: {
          id: this.state.todos.length + 1,
          title: "",
          status: "incomplete",
        },
      });
    }
  }

  addTodoHandler(event) {
    this.setState({
      todo: {
        id: this.state.todos.length + 1,
        title: event.target.value,
        status: "incomplete",
      },
    });
  }

  //   addToListHandler() {}

  completeTodoHandler(t) {
    let completedTodo = this.state.todos.filter((item) => item.title === t);
    this.setState({
      completedTodos: [...this.state.completedTodos, completedTodo],
    });
    console.log(this.state.completedTodos);
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={this.addTodoHandler}
          value={this.state.todo.title}
        />
        <button onClick={this.addToListHandler}>Add Todo</button>
        {this.state.todos.map((todo) => (
          <div key={todo.id}>
            {todo.status === "incomplete" && (
              <img
                src="./circle.svg"
                className="todo-icon"
                onClick={this.completeTodoHandler.bind(this, todo.title)}
                value={todo.title}
              />
            )}
            {todo.title}
          </div>
        ))}
      </form>
    );
  }
}

export default AddTodo;

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
        status: false,
      },
      todos: [],
      category: "all",
    };
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.completeTodoHandler = this.completeTodoHandler.bind(this);
    this.onCategorizeHandler = this.onCategorizeHandler.bind(this);
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
        title: event.target.value,
      },
    });
  }

  completeTodoHandler(todoId) {
    let completedTodos = [...this.state.todos];

    completedTodos.forEach((item) => {
      if (item.id === todoId) {
        item.status = !item.status;
      }
    });
    this.setState({ todos: completedTodos });
  }

  removeTodoHandler(todoId) {
    let removedTodos = this.state.todos.filter((item) => {
      return item.id !== todoId;
    });
    this.setState({
      todos: removedTodos,
    });
  }
  onCategorizeHandler(event) {
    this.setState({ category: event.target.value });
  }
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Add Todo"
            onChange={this.addTodoHandler}
            value={this.state.todo.title}
          />
          <button onClick={this.addToListHandler}>Add Todo</button>
          {this.state.category === "all" &&
            this.state.todos.map((todo) => (
              <div
                key={todo.id}
                className={`todo ${todo.status && "completed"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="todo-icon"
                  onClick={this.completeTodoHandler.bind(this, todo.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="todo-icon"
              onClick={this.completeTodoHandler.bind(this, todo.title)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="todo-icon"
                  onClick={this.removeTodoHandler.bind(this, todo.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>

                {todo.title}
              </div>
            ))}
          {this.state.category === "completed" &&
            this.state.todos
              .filter((todo) => todo.status)
              .map((todo) => (
                <div
                  key={todo.id}
                  className={`todo ${todo.status && "completed"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="todo-icon"
                    onClick={this.completeTodoHandler.bind(this, todo.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="todo-icon"
              onClick={this.completeTodoHandler.bind(this, todo.title)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="todo-icon"
                    onClick={this.removeTodoHandler.bind(this, todo.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  {todo.title}
                </div>
              ))}
          {this.state.category === "incomplete" &&
            this.state.todos
              .filter((todo) => !todo.status)
              .map((todo) => (
                <div
                  key={todo.id}
                  className={`todo ${todo.status && "completed"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="todo-icon"
                    onClick={this.completeTodoHandler.bind(this, todo.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="todo-icon"
              onClick={this.completeTodoHandler.bind(this, todo.title)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="todo-icon"
                    onClick={this.removeTodoHandler.bind(this, todo.id)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>

                  {todo.title}
                </div>
              ))}
        </form>

        <select onChange={this.onCategorizeHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </>
    );
  }
}

export default AddTodo;

import React from "react";
import "./AddTodo.css";
import { useState } from "react";
// import { Component } from "react";

/////////// Functional component ///////////////////

const AddTodo = () => {
  const [todo, setTodo] = useState({ id: "", title: "", status: false });
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState("all");

  const submitHandler = (event) => {
    event.preventDefault();
    if (todo.title) {
      let addedTodo = {
        id: todos.length + 1,
        title: todo.title,
        status: todo.status,
      };
      setTodos((prevState) => [...prevState, addedTodo]);
    }
    setTodo({
      id: "",
      title: "",
      status: false,
    });
  };
  const addTodoHandler = (event) => {
    setTodo({ id: todos.length + 1, title: event.target.value, status: false });
  };

  const onCategorizeHandler = (event) => {
    setCategory(event.target.value);
  };

  const completeTodoHandler = (todoId) => {
    let completedTodos = [...todos];

    completedTodos.forEach((item) => {
      if (item.id === todoId) {
        item.status = !item.status;
      }
    });
    setTodos(completedTodos);
  };
  const removeTodoHandler = (todoId) => {
    let removedTodos = todos.filter((item) => {
      return item.id !== todoId;
    });
    setTodos(removedTodos);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="input-form">
        <div className="input-container">
          <input
            type="text"
            placeholder="Add Todo"
            onChange={addTodoHandler}
            value={todo.title}
            className="todo-input"
          />
          <button className="input-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="plus-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <select onChange={onCategorizeHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        {category === "all" &&
          todos.map((todo) => (
            <div key={todo.id} className={`todo ${todo.status && "completed"}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="todo-icon"
                onClick={() => completeTodoHandler(todo.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="todo-icon"
                onClick={() => removeTodoHandler(todo.id)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <span className="todo-text">{todo.title}</span>
            </div>
          ))}
        {category === "completed" &&
          todos
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
                  onClick={() => completeTodoHandler(todo.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="todo-icon"
                  onClick={() => removeTodoHandler(todo.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>

                <span className="todo-text">{todo.title}</span>
              </div>
            ))}
        {category === "incomplete" &&
          todos
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
                  onClick={() => completeTodoHandler(todo.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="todo-icon"
                  onClick={() => removeTodoHandler(todo.id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>

                <span className="todo-text">{todo.title}</span>
              </div>
            ))}
      </form>
    </>
  );
};

////////// Class Component ////////////////////////

// class AddTodo extends Component {
//   constructor() {
//     super();

//     this.state = {
//       todo: {
//         id: "",
//         title: "",
//         status: false,
//       },
//       todos: [],
//       category: "all",
//     };
//     this.addTodoHandler = this.addTodoHandler.bind(this);
//     this.submitHandler = this.submitHandler.bind(this);
//     this.completeTodoHandler = this.completeTodoHandler.bind(this);
//     this.onCategorizeHandler = this.onCategorizeHandler.bind(this);
//   }
//   submitHandler(event) {
//     event.preventDefault();

//     if (this.state.todo.title) {
//       let addedTodo = {
//         id: this.state.todos.length + 1,
//         title: this.state.todo.title,
//         status: this.state.todo.status,
//       };
//       this.setState((prevState) => {
//         return { todos: [...prevState.todos, addedTodo] };
//       });
//       this.setState({
//         todo: {
//           id: this.state.todos.length + 1,
//           title: "",
//           status: false,
//         },
//       });
//     }
//   }

//   addTodoHandler(event) {
//     this.setState({
//       todo: {
//         title: event.target.value,
//       },
//     });
//   }

//   completeTodoHandler(todoId) {
//     let completedTodos = [...this.state.todos];

//     completedTodos.forEach((item) => {
//       if (item.id === todoId) {
//         item.status = !item.status;
//       }
//     });
//     this.setState({ todos: completedTodos });
//   }

//   removeTodoHandler(todoId) {
//     let removedTodos = this.state.todos.filter((item) => {
//       return item.id !== todoId;
//     });
//     this.setState({
//       todos: removedTodos,
//     });
//   }
//   onCategorizeHandler(event) {
//     this.setState({ category: event.target.value });
//   }
//   render() {
//     return (
//       <>
//         <form onSubmit={this.submitHandler} className="input-form">
//           <div className="input-container">
//             <input
//               type="text"
//               placeholder="Add Todo"
//               onChange={this.addTodoHandler}
//               value={this.state.todo.title}
//               className="todo-input"
//             />
//             <button onClick={this.addToListHandler} className="input-btn">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="plus-icon"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </button>
//           </div>
//           <select onChange={this.onCategorizeHandler}>
//             <option value="all">All</option>
//             <option value="completed">Completed</option>
//             <option value="incomplete">Incomplete</option>
//           </select>

//           {this.state.category === "all" &&
//             this.state.todos.map((todo) => (
//               <div
//                 key={todo.id}
//                 className={`todo ${todo.status && "completed"}`}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="todo-icon"
//                   onClick={this.completeTodoHandler.bind(this, todo.id)}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="todo-icon"
//                   onClick={this.removeTodoHandler.bind(this, todo.id)}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                   />
//                 </svg>

//                 <span className="todo-text">{todo.title}</span>
//               </div>
//             ))}
//           {this.state.category === "completed" &&
//             this.state.todos
//               .filter((todo) => todo.status)
//               .map((todo) => (
//                 <div
//                   key={todo.id}
//                   className={`todo ${todo.status && "completed"}`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="todo-icon"
//                     onClick={this.completeTodoHandler.bind(this, todo.id)}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>

//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="todo-icon"
//                     onClick={this.removeTodoHandler.bind(this, todo.id)}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                     />
//                   </svg>

//                   <span className="todo-text">{todo.title}</span>
//                 </div>
//               ))}
//           {this.state.category === "incomplete" &&
//             this.state.todos
//               .filter((todo) => !todo.status)
//               .map((todo) => (
//                 <div
//                   key={todo.id}
//                   className={`todo ${todo.status && "completed"}`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="todo-icon"
//                     onClick={this.completeTodoHandler.bind(this, todo.id)}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>

//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="todo-icon"
//                     onClick={this.removeTodoHandler.bind(this, todo.id)}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                     />
//                   </svg>

//                   <span className="todo-text">{todo.title}</span>
//                 </div>
//               ))}
//         </form>
//       </>
//     );
//   }
// }

export default AddTodo;

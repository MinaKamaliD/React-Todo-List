import "./App.css";
import React from "react";
import AddTodo from "./components/AddTodo";
import Title from "./components/Title";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Title />
      <AddTodo />
      <Footer />
    </div>
  );
}

export default App;

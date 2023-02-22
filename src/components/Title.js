import React from "react";
import "./Title.css";
// import { Component } from "react";
// import { useState } from "react";

////////// Functional Component ///////////////////

const Title = () => {
  return (
    <div>
      <h1 className="title">Todo List</h1>
    </div>
  );
};

////////// Class Component ////////////////////////

// class Title extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         <h1 className="title">Todo List</h1>
//       </div>
//     );
//   }
// }

export default Title;

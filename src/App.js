import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FormInput />
    </div>
  );
}

function FormInput() {
  const [state, setState] = useState([{ text: "" }]);

  const input = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    setState([...state, { text: input.current.value }]);
    input.current.value = "";
  };

  return (
    <>
      <div>
        <form onSubmit={formSubmit}>
          <input ref={input}></input>
        </form>
        {state.map((item, index) => (
          <div key={index}>{item.text}</div>
        ))}
      </div>
    </>
  );
}

export default App;

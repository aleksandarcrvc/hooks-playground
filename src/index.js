import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Users from "./Users";

import "./styles.css";

const initialState = {
  count: 0
};

const StoreProvider = React.createContext(initialState);

function App() {
  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

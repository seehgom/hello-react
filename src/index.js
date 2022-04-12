import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Checkbox = () => {
  const [checked, toggle] = useReducer((val) => !val, false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "unchecked"}
    </>
  );
};

const App = () => {
  return <Checkbox />;
};

ReactDOM.render(<App />, document.getElementById("root"));

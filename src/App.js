import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./demo/DemoOutput";

function App() {
  const [show, setShow] = useState(false);

  console.log("app running");

  const toggleHandler = useCallback(() => {
    setShow((show) => !show);
  }, [show]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleHandler}>문자열 토글 버튼</Button>
    </div>
  );
}

export default App;

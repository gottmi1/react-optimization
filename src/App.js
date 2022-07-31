import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoList from "./demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  // const [show, setShow] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);

  // console.log("app running");

  // const toggleHandler = useCallback(() => {
  //   if (allowToggle) setShow((show) => !show);
  // }, [allowToggle]);
  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      {/* 만약 items에 하드코딩된 배열을 넣는다면 같은 참조값을 가진 새로운 배열이 생성되기 때문에 계속 items sorted가 일어난다. */}
      <Button onClick={changeTitleHandler}>바꾸기</Button>
      {/* 애가 리렌더되지 않는 이유 : React.memo를 사용한 컴포넌트이고, chage..가 useCallback함수이기떄문에 props가 변경되지 않았기 때문. */}
    </div>
  );
}

export default App;

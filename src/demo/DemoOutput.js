import React, { useMemo } from "react";

const DemoOutput = (props) => {
  console.log("demo output running");
  // show={false}를 줘도 버튼클릭시 이 로그까지 같이 찍히는데, 이유는 부모 컴포넌트가 재실행되면 자식 컴포넌트 함수도 재실행되기 때문이다. props와는 상관없이 부모 컴포넌트가 바뀌어서 출력될 뿐.
  return <p>{props.show ? "This is New!" : ""}</p>;
  // 항상 렌더링되지만 값은 this is new 혹은 빈 문자열 둘 중 하나이다.
};

export default React.memo(DemoOutput);

import React, { useEffect, useState } from "react";
import store from "../redux/store";
import { add, sub } from "../redux/actionCreator/CounterAction";
import { Button } from "antd";
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState().CountReducer.count);
    });
  }, []);

  return (
    <div>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          store.dispatch(sub());
        }}
      >
        -
      </Button>
      {count}
      <Button
        type="primary"
        size="small"
        onClick={() => {
          store.dispatch(add());
        }}
      >
        +
      </Button>
    </div>
  );
}

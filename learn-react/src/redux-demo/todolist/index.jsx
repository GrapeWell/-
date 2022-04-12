import React, { useEffect, useState } from "react";
import store from "../redux/store";
import { Input, Button, Checkbox } from "antd";
import {
  addItem,
  deleteItem,
  check,
} from "../redux/actionCreator/TodoAction/index";
export default function Todolist() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    store.subscribe(() => {
      setList([...store.getState().TodoReducer.todolist]);
    });
  }, []);
  return (
    <div>
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></Input>
      <Button
        onClick={() => {
          store.dispatch(addItem(text));
        }}
      >
        添加
      </Button>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                textDecoration: item.checked ? "line-through" : "none",
              }}
            >
              <Checkbox
                checked={item.checked}
                onChange={() => {
                  store.dispatch(check(index));
                }}
              >
                {item.content}
              </Checkbox>
              <Button
                type="danger"
                onClick={() => {
                  store.dispatch(deleteItem(index));
                }}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

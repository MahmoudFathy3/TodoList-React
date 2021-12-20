import React, { useState } from "react";
import AddItems from "../Add Items/AddItems";
import TodoItems from "../TodoItems/TodoItems";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      name: "Mahmoud",
      age: 24,
    },
    {
      id: 2,
      name: "Ahmed",
      age: 30,
    },
    {
      id: 3,
      name: "Ramy",
      age: 28,
    },
  ]);

  const DeleteHandler = (id) => {
    console.log(id);
    const filter = item.filter((item) => item.id !== id);
    return setItem(filter);
  };

  const Additem = (Newitem) => {
    Newitem.id = Math.floor(Math.random() * 600);
    // const itemList = item;
    // itemList.push(Newitem);
    setItem((PrevItem) => {
      return [...PrevItem, Newitem];
    });
  };
  console.log(item);
  console.log(item.length);

  return (
    <div className={styles.TodoList}>
      <h3 className="text-align">TodoList</h3>
      <TodoItems items={item} Delete={DeleteHandler} />
      <AddItems Newdata={Additem} />
    </div>
  );
};

export default TodoList;

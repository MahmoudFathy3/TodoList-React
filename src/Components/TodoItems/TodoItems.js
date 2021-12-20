import React, { Fragment } from "react";
import Data from "../item/item";
import styles from "./TodoItems.module.css";

const TodoItems = ({ items, Delete }) => {
  const length = items.length;
  const TodoItems = length ? (
    items.map((item) => {
      return (
        <Fragment key={item.id}>
          <Data item={item} Delete={Delete} />
        </Fragment>
      );
    })
  ) : (
    <p className={styles.show}>Dont show any items</p>
  );

  return (
    <div className={styles.TodoItems}>
      <div className={styles.Action}>
        <span className={`${styles.name} ${styles.title}`}>Name</span>
        <span className={`${styles.age} ${styles.title}`}>Age</span>
        <span className={`${styles.action} ${styles.title}`}>Action</span>
      </div>
      {TodoItems}
    </div>
  );
};

export default TodoItems;

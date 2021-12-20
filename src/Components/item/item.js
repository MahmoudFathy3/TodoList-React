import React from "react";
import styles from "../TodoItems/TodoItems.module.css";
const Data = ({ item, Delete }) => {
  return (
    <div key={item.id} className={styles.items}>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.age}>{item.age}</span>
      <span
        className={`${styles.Del} ${styles.action}`}
        onClick={() => Delete(item.id)}
      >
        Remove
      </span>
    </div>
  );
};

export default Data;

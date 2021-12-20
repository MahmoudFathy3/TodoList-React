import React, { useState } from "react";
import styles from "./AddItems.module.css";

const AddItems = ({ Newdata }) => {
  const [Newitem, setNewItem] = useState({
    name: "",
    age: "",
  });

  const ChangeHandler = (e) => {
    setNewItem({
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Newdata(Newitem);
    setNewItem({
      name: "",
      age: "",
    });
  };

  return (
    <div className={styles.add}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.name}
          name="name"
          id="name"
          value={Newitem.name}
          onChange={ChangeHandler}
        />
        <input
          type="number"
          placeholder="Your Age"
          className={styles.age}
          name="age"
          id="age"
          value={Newitem.age}
          onChange={ChangeHandler}
        />
        <input type="submit" value="Submit" className={styles.submit} />
      </form>
    </div>
  );
};

export default AddItems;

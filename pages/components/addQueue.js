import React, { useState } from "react";
import styles from '../../styles/Home.module.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment } from "../redux/counterSlice";
import { addGuest } from "../redux/guestSlice";

export const AddQueue = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const { counterSlice } = useSelector(state=>state);
  
  const inputQueue = () => {
    dispatch(increment());
    let order = counterSlice.value;
    dispatch(addGuest({ name: name, order: order }));
    setName('');
  }

  return (
    <div className={styles.addQueue}>
      <input placeholder="Input your name here"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <button onClick={inputQueue}>
        Get Queue Number
      </button>
    </div>
  )
}
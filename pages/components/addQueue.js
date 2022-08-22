import React from "react";
import styles from '../../styles/Home.module.css';
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

export const AddQueue = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.addQueue}>
      <input
        // onChange={e => this.updateInput(e.target.value)}
        // value={this.state.input}
      />
      <button onClick={()=>dispatch(increment())}>
        Add Queue
      </button>
    </div>
  )
}
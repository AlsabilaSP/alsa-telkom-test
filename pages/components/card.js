import React from "react";
import styles from '../../styles/Home.module.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteGuest } from "../redux/guestSlice";

export const ListCard = () => {
    const dispatch = useDispatch();
    const { guestSlice } = useSelector(state=>state);
    
    const deleteQueue = (order) => {
        dispatch(deleteGuest(order));
    }

    return guestSlice.list.map(item => (
        <div key={item.order} className={styles.card} onClick={() => deleteQueue(item.order)}>
            <div className={styles.name}><b>{item.name}</b></div>
            <div className={styles.number}>
                {item.order}
            </div>
            <div className={styles.memo}>
                Click this card to end Queue No. {item.order}
            </div>
        </div>
    ))
}
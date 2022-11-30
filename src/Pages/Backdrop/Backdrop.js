import React from "react";
import styles from './Backdrop.module.css';

const Backdrop = (props)  => {

    return (
        <div className={props.trigger ? styles.Backdrop : null} onClick={props.click}>

        </div>
    )
}

export default Backdrop;

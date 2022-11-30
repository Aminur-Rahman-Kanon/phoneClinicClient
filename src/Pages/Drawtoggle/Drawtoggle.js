import React from "react";
import styles from './Drawtoggle.module.css';


const DrawToggle = (props)  => {

    return (
        <div className={styles.Drawtoggle} onClick={props.switch}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>
    )
}

export default React.memo(DrawToggle);

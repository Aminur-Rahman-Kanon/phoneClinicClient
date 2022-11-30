import React from "react";
import { Link } from "react-router-dom";
import styles from './HeaderIntro1.module.css';

const HeaderIntro1 = () => {

    return (
        <div className={styles.HeaderIntro1}>
            <h2><strong>Excellent Services For Repairing Your Broken Gadget</strong></h2>
            <h3 className={styles.para}>We Repair All sorts of smart Devices and We provide the Best services in South East London</h3>
            <Link to="/inquiry" className={styles.btn}>Book Appoinment</Link>
        </div>
    )
}

export default React.memo(HeaderIntro1);

import React from "react";
import styles from './GetAquote.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


const GetAquote = (props) => {

    return (
        <div className={styles.Main}>
                <h3>Cant find what you looking for</h3>
                <div className={styles.Sub}>
                    <h4>Phone Clinic</h4>
                    <div className={styles.Call}>
                        <FontAwesomeIcon icon={faPhoneAlt} color="#468bdf"/>
                        <a href="tel: 02072372724" className={styles.Num}>02072372724</a>
                    </div>
                    <h4>271 Old kent Road</h4>
                    <h4>SE1 5LU</h4>
                </div>        
        </div>   
    )
}

export default GetAquote;

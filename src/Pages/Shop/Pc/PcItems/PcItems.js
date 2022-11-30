import React from 'react';
import styles from './PcItems.module.css';

const pcItems = (props) => {

    // console.log('pcItems');

    return (
        <div className={props.device === 'mobile' || 'phoneaccessories' ? styles.Mobile : styles.Main}>
            <img src={props.img} alt={props.img}/>
            <div>
                <p>{props.items}</p>
            </div>
        </div>
    )
}

export default pcItems;

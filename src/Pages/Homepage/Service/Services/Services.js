import React, { useEffect } from 'react';
import styles from './Services.module.css';
import 'aos/dist/aos.css';


const Services = (props) => {

    return (
        <div  data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-once="true" data-aos-duration="1500" className={styles.Services}>
            <span className={styles.Icon}>
                <img src={props.img} alt={props.title}/>
                <p>{props.title}</p>
            </span>
        </div>
    )
}

export default Services;

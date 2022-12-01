import React, { useEffect } from "react";
import styles from './storeLocator.module.css';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StoreLocator = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className={styles.Main}>
            <div className={styles.bgMain}></div>

            <div className={styles.details}>
                <div className={styles.section1}>
                    <p>Currently We two stores in London. One in the 271 Old Kent Road, SE1 5LU, and another in 231 Waterloo Road Se1 8XH.
                        All of our Stores are equiped with modern tools and higly qualified experienced technician. We always try to keep our customers
                        happy with our service. The location makes a lot of difference in such repairs and the center should have all hi-tech features to support the service being provided.
                    </p>

                    <p>All the contact information regarding to the store location has been given below. Don't Hesitate to contact with us 
                        for any kind of queries.
                    </p>
                </div>

                <div className={styles.store}>
                    <div className={styles.store1}>
                        <div className={styles.store1Pic}></div>
                        <h3>Old Kent Road, SE1</h3>
                        <div className={styles.storeDetails}>
                            <p> 271 Old Kent Road, London</p>
                            <p>SE1 5LU</p>
                            <p><a href="tel:02072372724" className={styles.phoneNumber}>020 7237 2724</a></p>

                            <div className={styles.direction}>
                                <FontAwesomeIcon icon={faLocationArrow} className={styles.location}/>
                                <a href="https://www.google.com/maps/place/Phone+Clinic/@51.4891588,-0.0820587,16.21z/data=!4m5!3m4!1s0x4876036920da01b5:0x45fb4c3e98af7ccd!8m2!3d51.4893716!4d-0.0784252" target="_blank" rel="noreferrer">Get Direction</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.store2}>
                        <div className={styles.store2Pic}></div>
                        <h3>Waterloo, SE1</h3>
                        <div className={styles.storeDetails}>
                                <p>231 Waterloo Rd, London</p>
                                <p>SE1 8XH</p>
                                <p><a href="tel:07484369049" className={styles.phoneNumber}>07484 369049</a></p>

                            <div className={styles.direction}>
                                <FontAwesomeIcon icon={faLocationArrow} className={styles.location}/>
                                <a href="https://www.google.com/maps/place/Waterloo+Rd,+London+SE1+8XH/@51.4996554,-0.1088619,17z/data=!3m1!4b1!4m5!3m4!1s0x487604bb5bb03399:0x4346bc36fe7c6f1!8m2!3d51.4997228!4d-0.1066179" target="_blank" rel="noreferrer">Get Direction</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreLocator;

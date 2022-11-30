import React from "react";
import phone from '../../../Assets/Images/others/iPhone.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import styles from './whyChooseUsMain.module.css';

const WhyChooseUsMain = () => {

    return (
        <div className={styles.Main}>
            <h2>Why Choose Us</h2>
            <div className={styles.Sub}>
                <div>
                    <div data-aos='fade-right' className={styles.Container1}>
                        <div className={styles.Para}>
                            <h3>Same Day Reapairs</h3>
                            <p>Like our name suggest, we provide while you wait service for most of the repairs.</p>
                        </div>
                        <div className={styles.smile}>
                            <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam} />
                        </div>
                    </div>

                    <div data-aos='fade-right' className={styles.Container1}>
                        <div className={styles.Para}>
                            <h3>High Quality Spare Parts</h3>
                            <p>We provide 30 days repair warranty.</p>
                        </div>
                        <div className={styles.smile}>
                            <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam} />
                        </div>
                    </div>

                    <div data-aos='fade-right' className={styles.Container1}>
                        <div className={styles.Para}>
                            <h3>Experienced Expertise</h3>
                            <p>We are in mobile phone service from more than 12 years.</p>
                        </div>
                        <div className={styles.smile}>
                            <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam} />
                        </div>
                    </div>
                </div>
                
                <div className={styles.Img}>
                    <img src={phone} alt="Phone"/>
                </div>

                <div>
                    <div data-aos='fade-left' className={styles.Container2}>
                        <div className={styles.smile}>
                            <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam}/>
                        </div>
                        <div className={styles.Para}>
                            <h3>30 Days Warranty</h3>
                            <p>All our repair service comes with 30 days warranty, subject to no physical or liquid damage.</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className={styles.Container2}>
                        <div className={styles.smile}>
                            <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam}/>
                        </div>
                        <div className={styles.Para}>
                            <h3>Secure Payment</h3>
                            <p>We are SSL certified , hence your payment details are secured.</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className={styles.Container2}>
                        <div className={styles.smile}>
                            <FontAwesomeIcon className={styles.Smile} icon={faSmileBeam}/>
                        </div>
                        <div className={styles.Para}>
                            <h3>No Fix No Fee</h3>
                            <p>We’ll not charge anything, if we aren’t able to fix your device.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default React.memo(WhyChooseUsMain);

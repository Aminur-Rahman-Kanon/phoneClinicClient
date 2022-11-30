import React, { useEffect } from "react";
import styles from './HeaderIntro2.module.css';
import img from '../../../../Assets/Images/others/phoneClinic.jpg';
import phone from '../../../../Assets/Images/heading/mobileRepair.png';
import laptop from '../../../../Assets/Images/heading/laptop.jpeg';
import gagdet from '../../../../Assets/Images/heading/devices.jpg';
import ria from '../../../../Assets/Images/heading/ria.png';
import western from '../../../../Assets/Images/heading/wu.png';

import aos from 'aos';
import 'aos/dist/aos.css';

const HeaderIntro2 = () => {

    useEffect(() => {
        aos.init({duration:1300})
    }, [])

    return (
        <div className={styles.HeaderIntro2}>
            <div className={styles.Container} data-aos="fade-right" data-aos-once="true">
                <img className={styles.Img} src={img} alt="HeaderIntro 2"/>
            </div>

            <div data-aos="fade-left" data-aos-once="true" className={styles.Para}>
                <h2>We Provide The Best Services To Repair Your Gagdet</h2>
                <p>Phone Clinic serves One of many services you need your everyday life. Our service starts from phone servicing.
                    We provide the best gagdet repairing service in South East London. Our expertises are experinced
                    working a decade in this field capable of diagnose and repair all sorts of Android and Apple smartphone
                    tablet and iPad. We offer low price quick repair process.</p>
                    
                    <p>We also provide free Diagnostics reports
                    so you know the price before the repair process begin. Our serice also includes All sorts of laptop</p>
                    
                    <p>We have superfast onshop internet browsing facility, photocopy, scanning, print documents from the internet.
                    If you want to send money then we have Western union, Ria, MoneyGram, besides we also do currency
                    exchange and courier services. for more information or to find the right place please find our navigation menu below
                    or call or email us in the contact us section.
                    devices. 
                </p>
                <ul>
                    <li><img src={laptop} alt="laptop"/></li>
                    <li><img src={phone} alt="Phones"/></li>
                    <li><img src={gagdet} alt="Gagdet"/></li>
                    <li><img src={ria} alt="Ria"/></li>
                    <li><img src={western} alt="Western Union"/></li>
                    
                </ul>
            </div>

        </div>

    )
}

export default React.memo(HeaderIntro2);

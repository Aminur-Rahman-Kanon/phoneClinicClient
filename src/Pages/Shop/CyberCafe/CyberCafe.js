import React, { useEffect } from "react";
import styles from './CyberCafe.module.css';
import cafe from '../../../Assets/Images/others/cafe.png';
import copy from '../../../Assets/Images/others/copy.png';
import printer from '../../../Assets/Images/others/printer.png';
import aos from 'aos';
import 'aos/dist/aos.css';


const CyberCafe = () => {

    useEffect(() => {
        aos.init();
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className={styles.HeaderMain}>
                <div className={styles.HeaderPara}>
                    <h2>Browse the Internet</h2>
                    <div className={styles.Subpara}>
                        <h4>Super Fast Fibre Optic Internet with Security</h4>
                        <h4>Print or copy Any Document</h4>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1200" className={styles.HeaderImg}>
                    <img src={cafe} alt="Cyber Cafe"/>
                </div>
            </div>

            <div className={styles.HeaderIntro1}>
                <div className={styles.SubIntro1}>
                    <h2>What We Offer at Phone Clinic</h2>
                </div>

                <div className={styles.SubIntro2}>
                    <div className={styles.SubIntro2Div}>
                        <img src={cafe} alt="cafe"/>
                        <h3>Superfast Internet</h3>
                        <p>We offer superfast Fibre Optic Broadband Internet browsing</p>
                    </div>

                    <div className={styles.SubIntro2Div}>
                        <img src={printer} alt="printer"/>
                        <h3>Print or Photocopy</h3>
                        <p>We have High resolution Color Printer and Photocopier to print documents and photos</p>
                    </div>

                    <div className={styles.SubIntro2Div}>
                        <img src={copy} alt="scanner"/>
                        <h3>Document Scanner</h3>
                        <p>We have Powerful Scanner to scan any Documents or Photo</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CyberCafe;

import React from 'react';
import { faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './FooterMain.module.css';

const FooterMain = () => {


    return (    
        <div className={styles.Main}>
            <div className={styles.socialLinkMain}>
                <h2 className={styles.socialLinkHeader}>Phone Clinic</h2>
                <p className={styles.socialLinkPara}>Follow Us</p>
                <ul className={styles.socialLinkLists}>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.fb} style={{height: '35px', width: '35px'}} icon={faFacebook}/></Link>
                    </li>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.yt} style={{height: '35px', width: '35px'}} icon={faYoutube}/></Link>
                    </li>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.in} style={{height: '35px', width: '35px'}} icon={faInstagram}/></Link>
                    </li>
                    <li className={styles.socialLinkList}>
                        <Link to='' className={styles.socialLinkLinks}><FontAwesomeIcon id={styles.tw} style={{height: '35px', width: '35px'}} icon={faTwitter}/></Link>
                    </li>
                </ul>
            </div>

            <div className={styles.quickLinkMain}>
                <h3 className={styles.quickLinkHeader}>Quick Links</h3>
                <ul className={styles.quickLinkLists}>
                    <Link to="/aboutus" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>About Us</li>
                    </Link>

                    <Link to="/service" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Services</li>
                    </Link>

                    <Link to="repair/phone/apple/appoinment" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Appoinment</li>
                    </Link>

                    <Link to="/contact" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Contact</li>
                    </Link>

                    <Link to="/other_services/store_locator" className={styles.quickLinkLinks}>
                        <li className={styles.quickLinkList}>Store Locator</li>
                    </Link>
                </ul>
            </div>
            
            <div className={styles.usefulLinkMain}>
                <h3 className={styles.usefulLinkHeader}>Useful Links</h3>
                <ul className={styles.usefulLinkLists}>
                    <Link to="" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Privacy Policy</li>
                    </Link>
                    <Link to="" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Terms and Conditions</li>
                    </Link>    
                    <Link to="" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Disclaimer</li>
                    </Link>    
                    <Link to="" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>Support</li>
                    </Link>    
                    <Link to="" className={styles.usefulLinkLinks}>
                        <li className={styles.usefulLinkList}>FAQ</li>
                    </Link>
                </ul>
            </div>

            <div className={styles.workingHourMain}>
                <h3 className={styles.workingHourHeader}>Working Hours</h3> 
                <ul className={styles.workingHourLists}>
                    <li className={styles.workingHourList}>
                        <FontAwesomeIcon icon={faClock} className={styles.workingHourFont} />
                        <p className={styles.workingHourPara}>Monday-Saturday: 10AM-9PM</p>
                    </li>

                    <li className={styles.workingHourList}>
                        <FontAwesomeIcon icon={faClock} className={styles.workingHourFont} />
                        <p className={styles.workingHourPara}>Sunday: 11AM-8PM</p>
                    </li>
                </ul>
                <p style={{color: 'white'}}>&copy; Copyright 2022</p>
            </div>
        </div>
    )
}


export default FooterMain;

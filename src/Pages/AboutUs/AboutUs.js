import React, { useEffect } from 'react'
import styles from './AboutUs.module.css';
import aboutUsImage from '../../Assets/Images/others/aboutUs.jpg';
import call from '../../Assets/Images/others/dial.png';
import email from '../../Assets/Images/others/email.png';
import tablet from '../../Assets/Images/others/tablet.png';
import phone from '../../Assets/Images/phoneRepair/iphone.png';
import laptop from '../../Assets/Images/shop/laptop/laptopLogo/hp.png';
import money from '../../Assets/Images/others/moneyTransfers.png';
import exchange from '../../Assets/Images/others/exchange.png';
import accessories from '../../Assets/Images/others/accessories.png';


const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.location.pathname === '/contact') {
            document.getElementById('contact').scrollIntoView();
        }
    }, [])

    return (
        <>
            <div className={styles.Main}>
                <div className={styles.MainImg}>
                    <img src={aboutUsImage} alt="about us"/>
                </div>

                <div className={styles.MainPara}>
                    <h1>About Phone Clinic</h1>
                    
                    <div className={styles.SubPara}>
                        <div className={styles.para}>
                            <p>Phone Clinic is experts in mobile repairs and have a good exposure on tablets as well. Our experience 
                                with the services we provide in the United Kingdom has been great and the response is overwhelming. 
                                The location makes a lot of difference in such repairs and the center should have all hi-tech features
                                to support the service being provided. Phone Clinic is all equipped to take
                                care of such repairs for mobiles. We have a team of professionals who are dedicatedly working on repairing 
                                your phones while you wait at the center.</p>

                            <p>We have different ways of getting your phone repaired on while you wait basis. These can be when you walk 
                                in the store or get an appointment before you come in. The only difference is the wait time in both scenarios. 
                                Since you have taken an appointment a time slot is given to you so that you do not have to wait for a long time 
                                and get your phone repaired as soon as possible.</p>
                            
                            <p>However, in both cases you would get your phone repaired for sure while you wait for it.This kind of service is the 
                                need of the hour as a lot of important data is stored on our phones and we cannot let them be away from us for even 
                                a minute else we may face many challenges. Keeping this in mind we have started this service to ensure that you get your
                                work completed on time even when your phone needs repairs.Customer Satisfaction is our main goal. We work so hard to keep 
                                our customers happy. We recently opened up another store to enhance our service to you. Your feedback is always welcome to us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.ServiceMain}>
                <h1>Services We Offer</h1>
                <h3>At Phone Clinic You will get the following Services</h3>
                <div className={styles.Services}>
                    <div className={styles.service} alt="Phone">
                        <img src={phone}/>
                        <div className={styles.details}>
                            <h2>Phone Repair</h2>
                            <p>We repair Phone of All different kinds of Make and Model</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={tablet} alt="tablet"/>
                        <div className={styles.details}>
                            <h2>Tablet Repair</h2>
                            <p>We repair Tablet of All different kinds of Make and Model</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={laptop} alt="laptop"/>
                        <div className={styles.details}>
                            <h2>Laptop Repair</h2>
                            <p>We repair Laptop of All different kinds of Make and Model</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={accessories} alt="accessories"/>
                        <div className={styles.details}>
                            <h2>All Accessories</h2>
                            <p>We have accessories for all different types of Phone, Tablet and Laptop</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={money} alt="money"/>
                        <div className={styles.details}>
                            <h2>Money Transfer</h2>
                            <p>We send money all over the world through Western Union, Ria, MoneyGram etc</p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <img src={exchange} alt="exchange"/>
                        <div className={styles.details}>
                            <h2>Currency Exchange</h2>
                            <p>We also exchange money to almost all currencies</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className={styles.ContactMain}>
                <h1>Contact Us</h1>
                <div className={styles.SubContact}>
                    <h3>If you need to contact us</h3>

                    <div className={styles.Contacts}>
                        <a href='tel: 02072372324' style={{textDecoration:'none'}}>
                            <div className={styles.Contact}>
                                <img src={call} alt="call"/>
                                <div>
                                    <h3>By Phone</h3>
                                    <p>020 7237 2724</p>
                                </div>
                            </div>
                        </a>

                        <div className={styles.Contact}>
                            <img src={email} alt="email"/>
                            <div>
                                <h3>By Email</h3>
                                <p>phoneclinic@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs;

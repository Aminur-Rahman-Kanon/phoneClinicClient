import React, { Component } from "react";
import HeaderIntro1 from "./HeaderIntro/HeaderIntro1/HeaderIntro1";
import HeaderIntro2 from "./HeaderIntro/HeaderIntro2/HeaderIntro2";
import ServiceMain from "./Service/ServiceMain/ServiceMain";
import WhyChooseUsMain from "./whyChooseUs/whyChooseUsMain";
import pic1 from '../../Assets/Images/others/banner/service.png';
import pic2 from '../../Assets/Images/others/banner/transfer.png';
import pic3 from '../../Assets/Images/others/banner/gadget.png';
import issue from '../../Assets/Images/others/issue.png';
import clipboard from '../../Assets/Images/others/clipboard.png';
import delivery from '../../Assets/Images/others/delivery.png';
import styles from './Homepage.module.css'

class HomePage extends Component {

    componentDidMount() {
        if (window.location.pathname === '/service'){
            document.getElementById('service').scrollIntoView();
        }
    }

    render () {        
        return (
            <div>                            
                <HeaderIntro1 />
    
                <div className={styles.BannerMain}>
    
                    <div className={styles.Banner}>
                        <img src={pic1} alt="pic1"/>
                        <div className={styles.Subbanner}>
                            <h3>Mobile Servicing</h3>
                            <p>All kinds of Smartphone Services</p>
                        </div>
                    </div>
    
                    <div className={styles.Banner}>
                        <img src={pic2} alt="pic2"/>
                        <div className={styles.Subbanner}>
                            <h3>Money Transfer</h3>
                            <p>Sends Money All Over the World</p>
                        </div>
                    </div>
    
                    <div className={styles.Banner}>
                        <img src={pic3} alt="pic3"/>
                        <div className={styles.Subbanner}>
                            <h3>Laptop and Mobile Parts</h3>
                            <p>All Kinds of Laptop and Smartphone Accessories</p>
                        </div>
                    </div>
                </div>
    
                <div className={styles.HeadingMain}>
                    <div className={styles.Header}>
                        <h1>How Does It Works</h1>
                        <h3>Get your device Repaired in Just Three Easy Steps</h3>
                    </div>
    
                    <div className={styles.Details}>
                        <div className={styles.Subdetails}>
                            <img src={issue} alt="issue"/>
                            <h3><strong>Step 1</strong>. Tell Us Your Issue</h3>
                            <p>Tell us about your Device problem by Call or Booking an Appoinment</p>
                        </div>
                        <div className={styles.Subdetails}>
                            <img src={clipboard} alt="clipboard"/>
                            <h3><strong>Step 2</strong>. Get Your Estimate</h3>
                            <p>We will reply you within an Hour about your appoinment time and price</p>
                        </div>
                        <div className={styles.Subdetails}>
                            <img src={delivery} alt="deliver"/>
                            <h3><strong>Step 3</strong>. Bring or Send the Device</h3>
                            <p>Once happy with price and time, you can bring or send the device </p>
                        </div>
                    </div>
                </div>
    
                <div id="service">
                    <ServiceMain serviceMain={this.props.service}/>
                </div>

                <div>
                    <HeaderIntro2 />
                </div>

                <div>
                    <WhyChooseUsMain />
                </div>
                
            </div>
    
        )
    }

}

export default HomePage;

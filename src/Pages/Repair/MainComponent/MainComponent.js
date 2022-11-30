import React, { Component } from "react";
import styles from './MainComponent.module.css';
import RepairConsole from "./RepairConsole/RepairConsole";
import GetAquote from "../../../Extra/GetAqoute/GetAquote";
import bgPhone from '../../../Assets/Images/others/phone.png';
import bgTablet from '../../../Assets/Images/others/tablet.png';
import bgLaptop from '../../../Assets/Images/others/laptop.png';
import withParams from "../../../Hoc/withparams/withParams";
import { phone, phoneLogo, tablet, tabletPic, laptop } from "../../../data/data";

class MainComponent extends Component {

    state = {
        bg: {
            phone: bgPhone,
            tablet: bgTablet,
            laptop: bgLaptop
        }
    }

    componentDidMount () {
        window.scrollTo(0,0);
    }

    render () {
        const {deviceId} = this.props.params;

        let backgound = null;

        let repairConsole = null;

        Object.keys(this.state.bg).map(item => {
            if (item === deviceId) {
                backgound = this.state.bg[item];
            }
            return backgound;
        })

        //phone
        if (deviceId === 'phone') {
            repairConsole = <RepairConsole Data={phone} img={phoneLogo} device={deviceId} />
        }
        
        //tablet
        if (deviceId === 'tablet') {
            repairConsole = <RepairConsole Data={tablet} img={tabletPic} device={deviceId} />
        }

        //laptop
        if (deviceId === 'laptop') {
            repairConsole = <RepairConsole Data={laptop.title} img={laptop.laptopPic} device={deviceId} />
        }
        return (
            <>
                <div className={styles.Main}>
                    <div className={styles.MainImg}>
                        <img src={backgound} alt={backgound} />
                    </div>

                    <div className={styles.MainPara}>
                        <h2>{deviceId} Repair</h2>
                        <h4>Please Start by Choosing you Device</h4>
                    </div>
                </div>

                <div className={styles.Intro1}>
                    <h2>Repair process is very simple. All you have to do is:</h2>
                    <div style={{margin: '10px'}}>
                        <ul className={styles.Intro1List}>
                            <li>Select your {deviceId}'s Make (Brand)</li>
                            <li>Select your {deviceId}'s Model</li>
                            <li>Book an Appoinment by filling up a form Or</li>
                            <li>Call us on 020 7237 2724</li>
                        </ul>
                    </div>
                </div>
    
                <div className={styles.SelectPhone}>
                    {deviceId === "laptop" ? <h2>Our Services</h2> : <h2>Select Your Device</h2>}
                    {repairConsole}
                </div>
    
                <div className={styles.Para}>
                    <p>Whether you have got an iMac, Macbook Pro or Macbook Air we know how important your Mac is to you and no matter what the damage to it, we understand you will want this fixed as soon as possible. At Phone Clinic, we provide our customers with express and high-quality service.</p>
                    <p>All our Phone Clinic stores have dedicated technicians that specialise in repairing and finding the best solution to fix your Mac. We provide a range of repairs for Macbooks and iMac which include screen replacement, battery replacement, keyboard replacement, touchpad replacement,
                        charging issues, liquid diagnostics, and data diagnostics. Book a free consultation and our technicians will provide the best solution to get your device fixed.</p>
                </div>
                <GetAquote device={this.props.device}/>
            </>
        )
    }
}

export default withParams(MainComponent);

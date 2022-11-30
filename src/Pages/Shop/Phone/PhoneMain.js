import React, { useEffect } from "react";
import bgPhone from '../../../Assets/Images/others/phone.png';
import bgTablet from '../../../Assets/Images/tablet/tabletRepair.png';
import bgLaptop from '../../../Assets/Images/shop/laptop/laptopRepair.png';
import aos from 'aos';
import 'aos/dist/aos.css';
import styles from './PhoneMain.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faMobile, faLaptop, faTabletAlt, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const PhoneMain = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);

        aos.init({duration: 1500});
    }, []);

    //Defining Jsx Logically according to the device;

    let buyDeviceHeader = null;
    let fontIconSale = null;
    let fontIconHeaderRepair = null;
    let fontIconHeaderSale = null;
    let fontIconHeaderParts = null;
    let backgroundPic = null;
    let dir1 = `/repair/${props.device}`;
    let dir2 = `/sale/${props.device}`;
    let dir3 = `/accessories/${props.device}`;

    if (props.device === 'phone') {
        buyDeviceHeader = <h2>Or Buy Phones</h2>;
        fontIconSale = faMobile;
        fontIconHeaderRepair = <h2>Phone Repair</h2>;
        fontIconHeaderSale = <h2>Phone Sale</h2>
        fontIconHeaderParts = <h2>Phone Accessories</h2>
        backgroundPic = bgPhone;
    }
    else if (props.device ==='tablet') {
        buyDeviceHeader = <h2>Or Buy Tablets</h2>;
        fontIconSale = faTabletAlt;
        fontIconHeaderRepair = <h2>Tablet Repair</h2>;
        fontIconHeaderSale = <h2>Tablet Sale</h2>
        fontIconHeaderParts = <h2>Tablet Accessories</h2>
        backgroundPic = bgTablet;
    }
    else if (props.device === 'laptop') {
        buyDeviceHeader = <h2>Or Buy Laptops</h2>;
        fontIconSale = faLaptop;
        fontIconHeaderRepair = <h2>Laptop Repair</h2>;
        fontIconHeaderSale = <h2>Laptop Sale</h2>;
        fontIconHeaderParts = <h2>Laptop Accessories</h2>;
        backgroundPic = bgLaptop;
    }

    return (
        <>
            <div className={styles.Main}>
                <div className={styles.Heading}>
                    <h1>PHONE CLINIC</h1>
                    <div className={styles.Subheading}>
                        <Link to={dir1} className={styles.repairLink}>Take me to repair</Link>
                        {buyDeviceHeader}
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-easing="ease-out-cubic" className={styles.Img}>
                    <img src={backgroundPic} alt="phone clinic"/>
                </div>
            </div>

            <div className={styles.Menu}>
                <h1>What you looking for today</h1>
                
                <div className={styles.SubMenu}>
                    <Link to={dir1}>
                        <div>
                            <FontAwesomeIcon icon={faTools} size="3x"/>
                            {fontIconHeaderRepair}
                        </div>
                    </Link>

                    <Link to={dir2}>
                        <div>
                            <FontAwesomeIcon icon={fontIconSale} size="3x"/>
                            {fontIconHeaderSale}
                        </div>
                    </Link>

                    <Link to={dir3}>
                        <div>
                            <FontAwesomeIcon icon={faHeadphones} size="3x"/>
                            {fontIconHeaderParts}
                        </div>
                    </Link>
                </div>      
            </div>
        </>
    )
}

export default PhoneMain;

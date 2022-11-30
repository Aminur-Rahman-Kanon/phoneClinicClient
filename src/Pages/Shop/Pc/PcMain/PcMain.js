import React, { Component } from "react";
import bgLaptop from '../../../../Assets/Images/shop/laptop/laptopSale.png';
import delivery from '../../../../Assets/Images/Accessories/pcAccesories/Logo/delivery.png';
import gift from '../../../../Assets/Images/Accessories/pcAccesories/Logo/gift.png';
import payment from '../../../../Assets/Images/Accessories/pcAccesories/Logo/payment.png';
import styles from './PcMain.module.css';
import PcCategory from "./PcCategory/PcCategory";
import bgMobile from '../../../../Assets/Images/others/mobile.png';
import bgTablet from '../../../../Assets/Images/tablet/Sale/ipad/ipad3.png';
import laptopAccessory from '../../../../Assets/Images/shop/laptop/laptopAccessory.png';
import phoneAccessory from '../../../../Assets/Images/others/phoneAccessory.jpg';
import tabletAccessory from '../../../../Assets/Images/tablet/tabletAccessory.jpg';
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";
import withParams from "../../../../Hoc/withparams/withParams";
import { accessories, phone, phoneLogo, tablet, tabletPic, pcCategory, laptop, pcImage } from "../../../../data/data";


class PcMain extends Component {

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        let {queryId, deviceId} = this.props.params;
        let img = null;
        let details = null;
        let pcCategories = null;

        if (deviceId === 'laptop' && queryId === 'sale'){
            img = <img src={bgLaptop} alt="BgLaptop"/>;
            details = <div className={styles.Heading}>
                <h1>Laptops</h1>
                <h2>Shop Laptops</h2>
                <p>Buy All the parts you need for your personal computer.</p>
            </div>

            pcCategories = <PcCategory data={laptop.brand} 
                                    img={laptop.logo} 
                                    device={deviceId}
                                    query={queryId} />
        }

        else if (deviceId === 'laptop' && queryId === 'accessories') {
            img = <img src={laptopAccessory} alt="LaptopAccessotry"/>;
            details = <div className={styles.Heading}>
                <h1>Computer Accesories</h1>
                <h2>Shop Computer Accesories</h2>
                <p>Buy All the parts you need for your personal computer.</p>
            </div>

            pcCategories = <PcCategory data={pcCategory} 
                                    img={pcImage} 
                                    device={deviceId}
                                    query={queryId} />
        }

        else if (deviceId === 'tablet' && queryId === 'sale') {
            img = <img src={bgTablet} alt="BgTablet"/>;
            details = <div className={styles.Heading}>
                <h1>Tablets</h1>
                <h2>Shop Tablet PC</h2>
                <p>Buy New and Used Tablets</p>

            </div>

            pcCategories = <PcCategory data={tablet} 
                                    img={tabletPic} 
                                    device={deviceId}
                                    query={queryId} />
        }
        else if (deviceId === 'tablet' && queryId === 'accessories') {
            img = <img src={tabletAccessory} alt="TabletAccessories"/>;
            details = <div className={styles.Heading}>
                <h1>Tablet Accesories</h1>
                <p>Buy All the Accesories you need for your Tablets</p>
                <p>Buy New and Used Tablets</p>

            </div>

            pcCategories = <PcCategory data={accessories.tablet} 
                                    img={accessories.tabletImg}
                                    device={deviceId}
                                    query={queryId} />
        }
        else if (deviceId === 'phone' && queryId === 'sale'){
            img = <img src={bgMobile} alt="BgMobile"/>
            details = <div className={styles.Heading}>
                <h1>SmartPhones</h1>
                <h2>Shop Smart Phones</h2>
                <p>Buy New and Used Smart Phnoes</p>
            </div>

            pcCategories = <PcCategory data={phone} 
                                    img={phoneLogo} 
                                    device={deviceId}
                                    query={queryId} />
        }
        else if (deviceId === 'phone' && queryId === 'accessories'){
            img = <img src={phoneAccessory} alt="MobileAccessory"/>
            details = <div className={styles.Heading}>
                <h1>Phone Accesories</h1>
                <h2>Shop Smart Phone Accesories</h2>
                <p>Buy All the Accesories you need for your SmartPhones</p>
            </div>

            pcCategories = <PcCategory data={accessories.phone}
                                    img={accessories.phoneImg}
                                    device={deviceId}
                                    query={queryId} />
        }
        
        return (
            <>
                <div className={styles.Main}>
                    <div className={styles.Pic}>
                        {img}
                    </div>
                    {details}
                </div>
        
                <div className={styles.Shop}>
                    <h1>Shop Safely with Phone Clinic</h1>
                    <div className={styles.Head2}>
                        <div>
                            <img src={delivery} alt="Delivery"/>
                            <p>Free Delivery</p>
                        </div>
                        <div>
                            <img src={payment} alt="Payment" />
                            <p>Secure Payment</p>
                        </div>
                        <div>
                            <img src={gift} alt="Gift" />
                            <p>Gift Voucher</p>
                        </div>
                    </div>
                </div>

                <div className={styles.Intro1}>
                    <h2>Currently we don't have online purchasing<br></br>
                    To buy a {deviceId} {queryId}. All you have to do is:</h2>
                    <div style={{margin: '10px'}}>
                        <p>Fill up the form by selecting one of the category below or Call us on 020 7237 2724 To check the availabilities and price</p>
                    </div>
                </div>
        
                <div>
                    {pcCategories}
                </div>

                <GetAquote device={this.props.device}/>
            </>
        )
    }
}

export default withParams(PcMain);

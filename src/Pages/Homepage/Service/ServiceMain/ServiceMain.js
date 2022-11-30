import React from 'react';
import styles from './ServiceMain.module.css';
import Services from '../Services/Services';
import phone from '../../../../Assets/Images/others/phone.png';
import transfer from '../../../../Assets/Images/others/moneyTransfer.png';
import cafe from '../../../../Assets/Images/others/cafe.png';
import tablet from '../../../../Assets/Images/others/tablet.png';
import laptop from '../../../../Assets/Images/others/laptop.png'
import exchange from '../../../../Assets/Images/others/currencyExchange.png';
import { Link } from 'react-router-dom';



const ServiceMain = () => {

    return (
        <div id="service" className={styles.ServiceMain}>
            <h2>What you are Looking For Today . . .</h2>
            <div className={styles.Ext}>
                <Link to="/phone">
                    <Services img={phone} title='Phone'  />
                </Link>

                <Link to="/tablet">
                    <Services img={tablet} title='Tablet'/>
                </Link>
                
                <Link to="/laptop">
                    <Services img={laptop} title='Laptop'/>
                </Link>

                <Link to="/currency_converter">
                    <Services img={transfer} title='Money Transfer'/>
                </Link>

                <Link to="/other_services/cyber_cafe">
                    <Services img={cafe} title='Cyber Cafe'/>
                </Link>

                <Link to="/other_services/currency_exchange">
                    <Services img={exchange} title='Currency Exchange'/>
                </Link>

            </div>
        </div>
    )
}


export default React.memo(ServiceMain);

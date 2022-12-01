import React, { useEffect } from "react";
import Toolbar from "../../../Toolbar/Toolbar";
import Sidedrawer from "../../../Sidedrawer/Sidedrawer";
import FooterMain from "../../../Footer/FooterMain/FooterMain";
import Aux from "../../../../Hoc/Aux/Aux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import styles from './RepairQuote.module.css';


const RepairQuote = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    console.log('repairQuote');

    return (
        <Aux>
            <Toolbar switchBar={props.switchBar} />
                    <Sidedrawer backdrop={props.backdrop} 
                                toggleBackdrop={props.toggleBackdrop}
                                switch={props.switch} />
            
            <div className={styles.Main}>

                <div className={styles.Pic}>
                    <img src={props.pic} alt={props.pic} />
                </div>

                <div className={styles.Heading}>
                    <h2>{props.brand} Repair Services</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Complete LCD Replacement</th>
                                <th>£30</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Not Charging</th>
                                <th>£40</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Liquid Damage</th>
                                <th>£50</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>Battery Replacement</th>
                                <th>£60</th>
                            </tr>
                        </thead>
                    </table>

                    <button>Book Appoinment</button>
                </div>
            </div>

            <div className={styles.Info}>
                <h2>How to Book for A Repair</h2>
                <div className={styles.SubInfo}>
                    <div className={styles.Msg}>
                        <FontAwesomeIcon style={{height: '60px', width: '60px', color: '#FF5722'}} icon={faEnvelopeOpenText} />
                        <div>
                            <h3>Book for An Appoinment</h3>
                            <p>Click the Button Above</p>
                        </div>
                    </div>
                    <div className={styles.Map}>
                        <FontAwesomeIcon style={{height: '60px', width: '60px', color: '#FF5722'}} icon={faMapMarkerAlt} />
                        <div>
                            <h3>Visit Us In Store</h3>
                            <p>271 Old Kent Rd, London SE1 5LU</p>
                        </div>
                    </div>
                </div>
            </div>

            <FooterMain />
        
        </Aux>
    )
}

export default RepairQuote;

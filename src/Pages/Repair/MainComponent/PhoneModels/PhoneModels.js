import React, { Component } from "react";
import PhoneModel  from "./Phonemodel/Phonemodel";
import { Link } from "react-router-dom"; 
import styles from './PhoneModels.module.css';
import GetAquote from "../../../../Extra/GetAqoute/GetAquote";
import withParams from "../../../../Hoc/withparams/withParams";
import { phone, phonePic, tablet, tabletPic } from "../../../../data/data";


class PhoneModels extends Component {
    
    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render () {
        let { deviceId, itemId} = this.props.params;
        let display = null;
        let img = null;

        if (deviceId === 'phone') {
            img = <img src={phonePic[itemId]} alt={itemId} />
            display = Object.keys(phone).map(item => {
                return item === itemId ?
                    phone[item].map((igkey, index) => {
                        let dir = `/repair/${deviceId}/${item}/${igkey}/inquiry`;                    
                        return <Link key={index} to={dir}>
                                <PhoneModel key={igkey} device={igkey} />
                            </Link>
                    }) : null;
            })
        }
        
        if (deviceId === 'tablet') {
            img = <img src={tabletPic[itemId]} alt={itemId} />
            display = Object.keys(tablet).map(item => {
                return item === itemId ?
                    tablet[item].map((igkey, index) => {
                        let dir = `/repair/${deviceId}/${item}/${igkey}/inquiry`;                    
                        return <Link key={index} to={dir}>
                                <PhoneModel key={igkey} device={igkey} />
                            </Link>
                    }) : null;
            })
        }
        
        return (
            <div className={styles.Main}>
                <div className={styles.PicMain}>
                    <div className={styles.Pic}>
                    {img}
                    </div>
                </div>

                <div className={styles.Mobile}>
                    {display}
                </div>

                <GetAquote />
            </div>
        )
    }
    
    
}

export default withParams(PhoneModels);

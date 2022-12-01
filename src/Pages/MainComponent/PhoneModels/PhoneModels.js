import React, { useEffect } from "react";
import PhoneModel  from "./Phonemodel/Phonemodel";
import { Link, useParams } from "react-router-dom"; 
import styles from './PhoneModels.module.css';
import GetAquote from "../../../Extra/GetAqoute/GetAquote";
import { phone, phonePic, tablet, tabletPic } from "../../../data/data";


const PhoneModels = () => {

    const params = useParams();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let display = null;
    let img = null;

    if (params.deviceId === 'phone') {
        img = <img src={phonePic[params.itemId]} alt={params.itemId} />
        display = Object.keys(phone).map(item => {
            return item === params.itemId ?
                phone[item].map((igkey, index) => {
                    let dir = `/repair/${params.deviceId}/${item}/${igkey}/inquiry`;                    
                    return <Link key={index} to={dir}>
                            <PhoneModel key={igkey} device={igkey} />
                        </Link>
                }) : null;
        })
    }
    
    if (params.deviceId === 'tablet') {
        img = <img src={tabletPic[params.itemId]} alt={params.itemId} />
        display = Object.keys(tablet).map(item => {
            return item === params.itemId ?
                tablet[item].map((igkey, index) => {
                    let dir = `/repair/${params.deviceId}/${item}/${igkey}/inquiry`;                    
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

export default PhoneModels;

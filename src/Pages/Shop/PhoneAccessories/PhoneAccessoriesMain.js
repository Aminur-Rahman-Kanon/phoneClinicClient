import React, { Component } from "react";
import Toolbar from "../../../Toolbar/Toolbar";
import SideDrawer from "../../../Sidedrawer/Sidedrawer";
import FooterMain from "../../../Footer/FooterMain/FooterMain";
import Aux from "../../../../Hoc/Aux/Aux";
import PcCategory from "../../Pc/PcMain/PcCategory/PcCategory";
import styles from './PhoneAccessoriesMain.module.css';

const PhoneAccessoriesMain = () => {

    console.log('phoneAccessoriesMain');

    return (
        <Aux>
            <Toolbar switchBar={this.props.switchBar}/>
    
            <SideDrawer backdrop={this.props.backdrop} 
                        toggleBackdrop={this.props.toggleBackdrop}
                        switch={this.props.switch} />
            
            <div className={styles.Main}>
                <PcCategory data={this.props.data} img={this.props.img} />
            </div>

            <FooterMain />

        </Aux>
    )
}

export default PhoneAccessoriesMain;

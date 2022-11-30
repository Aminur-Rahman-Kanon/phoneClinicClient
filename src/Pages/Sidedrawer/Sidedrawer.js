import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
import styles from './Sidedrawer.module.css';
import Backdrop from '../Backdrop/Backdrop'
import SidePanel from "../Navigation/sidePanel/sidePanel";

const SideDrawer = (props) => {

    return (
        <>
            <Backdrop trigger={props.backdrop} click={props.toggleBackdrop}/>
            <div className={props.switch ? styles.Sidedrawer : styles.Off}>
                <div className={styles.Logo}>
                    <Logo />
                </div>

                <div className={styles.login}>
                    <SidePanel sideBar={props.switch} toggleSideBar={props.toggleBackdrop}/>
                </div>

                <nav className={styles.Nav}>
                    <NavigationItems sideDrawer={props.switch} toggleSideBar={props.toggleBackdrop}/>
                </nav>
            </div>
        </>
    )
}

export default SideDrawer;

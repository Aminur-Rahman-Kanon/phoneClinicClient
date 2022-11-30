import React from "react";
import DrawToggle from "../Drawtoggle/Drawtoggle";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import SidePanel from "../Navigation/sidePanel/sidePanel";
import styles from './Toolbar.module.css';

const Toolbar = (props) => {

    return (
        <div className={styles.Toolbar}>
            <Logo />
            <nav>
                <NavigationItems sideDrawer={props.sideBar} toggleSideBar={props.switchBar}/>
            </nav>
            <div className={styles.login}>
                <SidePanel />
            </div>
            <DrawToggle switch={props.switchBar}/>
        </div>
    )
}

export default Toolbar;

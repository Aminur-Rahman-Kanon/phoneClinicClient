import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {

    const url = useLocation().pathname.split('/');
    
    const hideSideDrawer = (parentId) => {
        const parent = document.getElementById(parentId);
        
        if (parent){
            parent.style.display = 'none'
        }

        if (props.sideDrawer){
            props.toggleSideBar();
        }
    }

    const showSideDrawer = (parentId) => {
        const parent = document.getElementById(parentId)
        parent.children[0].style.display = 'flex'
    }

    const hideParent = (parentId) => {
        const parent = document.getElementById(parentId);
        parent.children[0].style.display = 'none'
    }

    return (
        <nav className={styles.navMainContainer}>
            <ul className={styles.navMain}>
                <NavLink to="/"
                         className={({isActive}) => isActive ? styles.active : styles.inActive}
                         onClick={hideSideDrawer}
                         >Home</NavLink>
                <li onMouseOver={() => showSideDrawer('list1')}
                    onMouseOut={() => hideParent('list1')}
                    style={{listStyle: 'none', cursor: 'pointer'}}
                    className={url[1] === 'repair' ? `${styles.inActive} ${styles.active}` : styles.inActive}
                    id="list1"
                    >Repair
                    <ul className={styles.childRoutes} id="parent1">
                        <NavLink to="/repair/phone"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent1')}
                                 >Phone</NavLink>
                        <NavLink to="/repair/tablet"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent1')}
                                 >Tablet</NavLink>
                        <NavLink to="/repair/laptop" 
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent1')}
                                 >Laptop</NavLink>
                    </ul>
                </li>

                <li onMouseOver={() => showSideDrawer('list2')}
                    onMouseOut={() => hideParent('list2')}
                    style={{listStyle: 'none', cursor: 'pointer'}}
                    className={url[1] === 'sale' ? `${styles.inActive} ${styles.active}` : styles.inActive}
                    id="list2"
                    >Sale
                    <ul className={styles.childRoutes} id="parent2">
                        <NavLink to="/sale/phone"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent2')}
                                 >Phone</NavLink>
                        <NavLink to="/sale/tablet"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent2')}
                                 >Tablet</NavLink>
                        <NavLink to="/sale/laptop"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent2')}
                                 >Laptop</NavLink>
                    </ul>
                </li>

                <li onMouseOver={() => showSideDrawer('list3')}
                    onMouseOut={() => hideParent('list3')}
                    style={{listStyle: 'none', cursor: 'pointer'}}
                    className={url[1] === 'accessories' ? `${styles.inActive} ${styles.active}` : styles.inActive}
                    id="list3"
                    >Accessories
                    <ul className={styles.childRoutes} id="parent3">
                        <NavLink to="/accessories/phone"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent3')}
                                 >Phone</NavLink>
                        <NavLink to="/accessories/tablet"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent3')}
                                 >Tablet</NavLink>
                        <NavLink to="/accessories/laptop"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent3')}
                                 >Laptop</NavLink>
                    </ul>
                </li>

                <li onMouseOver={() => showSideDrawer('list4')}
                    onMouseOut={() => hideParent('list4')}
                    style={{listStyle: 'none', cursor: 'pointer'}}
                    className={url[1] === 'other_services' ? `${styles.inActive} ${styles.active}` : styles.inActive}
                    id="list4"
                    >Other Services
                    <ul className={styles.childRoutes} id="parent4">
                        <NavLink to="other_services/currency_converter"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent4')}
                                 >Check currency rate</NavLink>
                        <NavLink to="other_services/currency_exchange"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent4')}
                                 >Currency Converter</NavLink>
                        <NavLink to="other_services/cyber_cafe"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent4')}
                                 >Cyber cafe</NavLink>
                        <NavLink to="other_services/store_locator"
                                 className={({isActive}) => isActive ? styles.active : styles.inActive}
                                 onClick={() => hideSideDrawer('parent4')}
                                 >Store locator</NavLink>
                    </ul>
                </li>

                <NavLink to="/aboutus"
                         className={({isActive}) => isActive ? styles.active : styles.inActive}
                         onClick={hideSideDrawer}
                         >About us</NavLink>
            </ul>
        </nav>
    )
}

export default NavigationItems;

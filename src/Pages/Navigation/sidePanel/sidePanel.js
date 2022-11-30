import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import styles from './sidePanel.module.css';

function Login(props) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('loginUser'));

    if (user){
      setUser(user)
    }
    
  }, []);

  const logout = () => {
    sessionStorage.removeItem('loginUser');
    window.location.assign('/login');
  }

  const hideSideBar = () => {
    if (props.sideBar){
      props.toggleSideBar()
    }
  }

  let displayUser = null;

  if (user){
    if (user.hasOwnProperty('_id')) {
      displayUser = <div className={styles.displayUserContainer}>
              <div className={styles.displayUserMain}>
                <div className={styles.displayUserAvatar}>
                  <FontAwesomeIcon icon={faUserCircle} className={styles.displayUserImg}/>
                </div>

                <div className={styles.displayUserDetails}>
                  <div className={styles.displayUserHeaders}>
                    <h4 className={styles.displayUserH4}>{user.firstName}</h4>
                    <h4 className={styles.displayUserH4}>{user.lastName}</h4>
                  </div>
                  <button className={styles.logOutBtn} onClick={logout}>Log out</button>
                </div>
              </div>
        </div>
    }
    else {
      displayUser = <div className={styles.displayUserContainer}>
              <div className={styles.displayUserMain}>
                <div className={styles.displayUserAvatar}>
                  <img src={user.picture} alt='google-user' className={styles.googleUserImg} />
                </div>

                <div className={styles.displayUserDetails}>
                  <div className={styles.displayUserHeaders}>
                    <h4 className={styles.displayUserH4}>{user.given_name}</h4>
                    <h4 className={styles.displayUserH4}>{user.family_name}</h4>
                  </div>
                  <button className={styles.logOutBtn} onClick={logout}>Log out</button>
                </div>
              </div>
        </div>
    }
  }

  else {
    displayUser = <div className={styles.sidePanelContainer}>
        <div className={styles.sidePanelItem}>
          <NavLink to="/login"
                   className={ ({isActive}) => isActive ? `${styles.sidePanelLink} ${styles.sidePanelActive}` : styles.sidePanelLink}
                   onClick={hideSideBar}
                   >
            <FontAwesomeIcon icon={faUserCircle} className={styles.sidePanelIcon} />
            <p className={styles.sidePanelDetails}>Login</p>
          </NavLink>
        </div>

        <div className={styles.sidePanelItem}>
          <NavLink to="/register"
                   className={ ({isActive}) => isActive ? `${styles.sidePanelLink} ${styles.sidePanelActive}` : styles.sidePanelLink}
                   onClick={hideSideBar}
                   >
            <FontAwesomeIcon icon={faUserPlus} className={styles.sidePanelIcon} />
            <p className={styles.sidePanelDetails}>Register</p>
          </NavLink>
        </div>
    </div>
  }

  return (
    <div>
      {displayUser}
    </div>
  )
}
export default Login;

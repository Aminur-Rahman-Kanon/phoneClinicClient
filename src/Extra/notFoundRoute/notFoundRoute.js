import React from 'react'
import styles from './notFoundRoute.module.css';
import notFoundImg from '../../Assets/Images/others/notFoundRoute.gif'
import { Link } from 'react-router-dom';

function notFoundRoute() {
  return (
    <div className={styles.notFoundMain}>
      <div className={styles.notFoundDetails}>
        <h2>Oopss Not found</h2>
        <Link to="/" className={styles.notFoundLink}>Take me out of here</Link>
      </div>
      <img src={notFoundImg} alt='Not found' className={styles.notFoundImage} />
    </div>
  )
}

export default notFoundRoute

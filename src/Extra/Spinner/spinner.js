import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import styles from './spinner.module.css';

function spinner(props) {

    if (!props.switch) return null;

  return (
    <div className={styles.spinnerMain}>
      <SpinnerCircular size={88} thickness={175} speed={138} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
      <h4>Please wait ...</h4>
    </div>
  )
}

export default spinner

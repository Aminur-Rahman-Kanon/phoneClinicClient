import React from 'react';
import ReactDom from 'react-dom'
import styles from './Modal.module.css';

const Modal = (props) => {

    if (!props.switch) return null;

    return ReactDom.createPortal(
        <div className={styles.modalMain}>
            {props.children}
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;

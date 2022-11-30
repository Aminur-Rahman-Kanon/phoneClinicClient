import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faIdCard } from '@fortawesome/free-solid-svg-icons';
import styles from './login.module.css';
import Spinner from '../../Extra/Spinner/spinner';
import Modal from '../../Extra/Modal/Modal';
import jwtDecode from 'jwt-decode';


function Login() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [spinner, setSpinner] = useState(false);

    const [modal, setModal] = useState(false);

    const [btnDisable, setBtnDisable] = useState(true);

    const [userNotFound, setUserNotFound] = useState(false);

    const [passwordDoesntMatch, setPasswordDoestMatch] = useState(false);

    const handleGoogleLogin = (response) => {
        const user = jwtDecode(response.credential);
        console.log(user);
        sessionStorage.setItem('loginUser', JSON.stringify(user));
        window.location.assign('/');
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "314243253816-56jlani7b0fo8guq7ujgg3td4jvea5ek.apps.googleusercontent.com",
            callback: handleGoogleLogin
        })

        google.accounts.id.renderButton(
            document.getElementById('google-btn'),
            {
                theme: 'outline', size: 'large'
            }
        );

        google.accounts.id.prompt();

    }, [])

    useEffect(() => {
        if (email && password.length >= 8){
            setBtnDisable(false)
        }
        else {
            setBtnDisable(true)
        }
    }, [email, password])

    const displayMsg = <div className={styles.displayMsgContainer}>
        <h2>Something went wrong</h2>
        <h4>Please check your internet connection</h4>
        <button className={styles.displayMsgBtn} onClick={() => setModal(false)}>Retry</button>
    </div>

    const inputHandler = (id, event) => {
        if (id === 'email'){
            setEmail(event.target.value)
        }
        if (id === 'password'){
            setPassword(event.target.value);
        }
    }

    const submitLogin = (event) => {
        event.preventDefault();
        setSpinner(true);
        setUserNotFound(false);
        setPasswordDoestMatch(false);

        fetch('https://phone-clinic-server.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            setSpinner(false);
            if (data.status === 'success'){
                sessionStorage.setItem('loginUser', JSON.stringify(data.user))
                window.location.assign('/')
            }
            else if (data.status === 'user not found'){
                setUserNotFound(true)
            }
            else if (data.status === "password doesn't match"){
                setPasswordDoestMatch(true)
            }

        }).catch(err => {
            setSpinner(false);
            setModal(true)
        })
    }
    

  return (
    <div className={styles.loginContainerMain}>

        <Spinner switch={spinner} />

        <Modal switch={modal}>
            {displayMsg}
        </Modal>

        <div className={styles.main}>
            <div className={styles.background}>

            </div>

            <form className={styles.loginFormMain}>
                <h2>Login</h2>
                <div className={styles.inputFields}>
                    <div className={ userNotFound ? `${styles.inputField} ${styles.wrongInputField}` : styles.inputField}>
                        <input type="email"
                               className={styles.input}
                               placeholder="Email address"
                               onChange={(event) => inputHandler('email', event)}
                               />
                        <FontAwesomeIcon icon={faIdCard} className={styles.loginIcon}/>
                    </div>

                    <p style={userNotFound ? {display: 'block', color: 'red'} : {display: 'none'}} className={styles.inputHint}>User not found</p>
                </div>

                <div className={styles.inputFields}>
                    <div className={ passwordDoesntMatch ? `${styles.inputField} ${styles.wrongInputField}` : styles.inputField}>
                        <input type="password"
                               className={styles.input}
                               placeholder="password"
                               onChange={(event) => inputHandler('password', event)}
                                />
                        <FontAwesomeIcon icon={faLock} className={styles.loginIcon}/>
                    </div>

                    <p style={passwordDoesntMatch ? {display: 'block', color: 'red'} : {display: 'none'}} className={styles.inputHint}>Password doesn't match</p>
                </div>

                <button className={styles.loginBtn}
                        onClick={submitLogin}
                        disabled={btnDisable}
                        >Login</button>

                <div id="google-btn" className={styles.googleBtn}>

                </div>

                <div className={styles.registrationPrompt}>
                    <p style={{margin: '5px'}}>Not registered ?</p>
                    <Link to="/register" className={styles.registerLink}>Register</Link>
                </div>
            </form>

        </div>

    </div>
  )
}

export default Login

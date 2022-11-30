import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './registration.module.css';
import Modal from '../../Extra/Modal/Modal';
import Spinner from '../../Extra/Spinner/spinner';
import { Link, useNavigate } from 'react-router-dom';

const specialCharRegex = new RegExp(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/);
const UppercaseRegex = new RegExp(/[A-Z]/);

function Registration() {

    const navigate = useNavigate();

    const [target, setTarget] = useState('');

    const [firstName, setFirstName] = useState('');
    const [firstNameValidation, setFirstNameValidation] = useState(true);

    const [lastName, setLastName] = useState('');
    const [lastNameValidation, setLastNameValidation] = useState(true);

    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState(true);

    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState(true);

    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordValidation, setRepeatPasswordValidation] = useState(true);

    const [btnDisable, setBtnDisable]  = useState(true);

    const [modal, setModal] = useState(false);

    const [userExist, setUserExist] = useState(false);

    const [displayMsg, setDisplayMsg] = useState('');

    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

        switch(target){
            case 'firstName':
                firstName.length >= 3 ? setFirstNameValidation(true) : setFirstNameValidation(false);
                break;

            case 'lastName':
                lastName.length >= 3 ? setLastNameValidation(true) : setLastNameValidation(false);
                break;

            case 'email':
                const check1 = email.includes('@');
                const check2 = email.includes('.com');
                const check3 = email.indexOf('@');
                const check4 = email.indexOf('.com');
                let domain = null;

                if (check3 > 0 && check4 > 0){
                    domain = email.slice(check3+1, check4)
                }
                
                check1 && check2 && domain ? setEmailValidation(true) : setEmailValidation(false);

                break;

            case 'password':
                if (password.length >= 8 && specialCharRegex.test(password) && UppercaseRegex.test(password)) {
                    if (password === repeatPassword){
                        setPasswordValidation(true);
                        setRepeatPasswordValidation(true);
                    }
                    else {
                        setPasswordValidation(true);
                    }
                }
                else {
                    setPasswordValidation(false);
                }
                break;

            case 'repeatPassword':
                repeatPassword === password ? setRepeatPasswordValidation(true) : setRepeatPasswordValidation(false);
                break;

            default:
                break;
        }

    },  [firstName, lastName, email, password, repeatPassword])

    useEffect(() => {

        if ((firstName.length > 0 && firstNameValidation) && (lastName.length > 0 && lastNameValidation)
            && (email.length >= 0 && emailValidation) && (password.length >= 8 && passwordValidation)
            && (repeatPassword.length >= 8 && repeatPasswordValidation)){
            setBtnDisable(false)
        }
        else {
            setBtnDisable(true)
        }

    }, [firstNameValidation, lastNameValidation, emailValidation, passwordValidation, repeatPasswordValidation])

    const inputHandler = (id, event) => {

        switch(id){
            case 'firstName':
                setTarget(id);
                setFirstName(event.target.value);
                break;

            case 'lastName':
                setTarget(id);
                setLastName(event.target.value);
                break;

            case 'email':
                setTarget(id);
                setEmail(event.target.value);
                break;

            case 'password':
                setTarget(id);
                setPassword(event.target.value);
                break;

            case 'repeatPassword':
                setTarget(id);
                setRepeatPassword(event.target.value);
                break;
            
            default:
                break;
        }

    }

    const sendFrom = (event) => {
        event.preventDefault();
        setSpinner(true);
        

        fetch('https://phone-clinic-server.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        }).then(res => res.json()).then(data => {
            if (data.status === 'user exist'){
                setSpinner(false)
                setUserExist(true);
            }
            else {
                setSpinner(false)
                setDisplayMsg(data.status)
                setModal(true);
            }
        }).catch(err => {
            setSpinner(false);
            const errMsg = err.toString()
            setDisplayMsg(errMsg);
            setModal(true);
        });
    }

    const toggleBackdrop = () => {
        setModal(false);
    }

    const reloadPage = () => {
        navigate('/login');
    }

    let displayStatusMsg = null;

    if (displayMsg === 'created'){
        displayStatusMsg = <div className={styles.statusMsgMain}>
            <h2>User Created</h2>
            <h4>Thank you for joining with us</h4>
            <button className={styles.statusMsgBtn} onClick={reloadPage} >You welcome</button>
        </div>
    }
    else{
        displayStatusMsg = <div className={styles.statusMsgMain}>
            <h2>{displayMsg}</h2>
            <h4>Please check your internet connection</h4>
            <button className={styles.statusMsgBtn} onClick={toggleBackdrop}>Retry</button>
        </div>
    }

    let emailClassValidation = null;

    if (emailValidation && !userExist){
        emailClassValidation = styles.emailInput
    }
    else {
        emailClassValidation = `${styles.emailInput} ${styles.wrongEmailInput}`
    }


  return (
    <>
        <Spinner switch={spinner} />

        <Modal switch={modal}>
            {displayStatusMsg}
        </Modal>
        <div className={styles.main}>
            <div className={styles.registrationMain}>
                
            </div>

            <form className={styles.registrationFormMain}>
                <h2>Create Account</h2>

                <div className={styles.registrationFormBody}>
                    <div className={firstNameValidation ? styles.inputMain : `${styles.inputMain} ${styles.wrongInputMain}`}>
                        <input type="text"
                            placeholder='First Name'
                            className={styles.inputField}
                            onChange={(event) => inputHandler('firstName', event)}
                            />
                        <FontAwesomeIcon icon={ faFont } className={styles.inputFont}/>
                    </div>

                    <div className={lastNameValidation ? styles.inputMain : `${styles.inputMain} ${styles.wrongInputMain}`}>
                        <input type="text"
                            placeholder='Last Name'
                            className={styles.inputField}
                            onChange={(event) => inputHandler('lastName', event)}
                            />
                        <FontAwesomeIcon style={{visibility: 'hidden'}} icon={ faFont } className={styles.inputFont}/>
                    </div>

                    <div className={styles.emailField}>
                        <div className={ emailClassValidation }>
                            <input type="email" 
                                placeholder='Email'
                                className={styles.inputField}
                                onChange={(event) => inputHandler('email', event)}
                                />
                            <FontAwesomeIcon icon={ faEnvelope } className={styles.inputFont}/>
                        </div>

                        <p style={userExist ? {displat: 'block', color: 'red'} : {display: 'none'}} className={styles.emailHint}>User email exist</p>

                    </div>


                    <div className={styles.passwordField}>
                        <div className={passwordValidation ? styles.passwordInput : `${styles.passwordInput} ${styles.wrongPasswordInput}`}>
                            <input type="password"
                                placeholder='Password'
                                className={styles.inputField}
                                onChange={(event) => inputHandler('password', event)}
                                />
                            <FontAwesomeIcon icon={ faLock } className={styles.inputFont}/>
                        </div>
                        <p className={styles.passwordHint}>Password should be at least 8 characters including an uppercase and a special characters</p>
                    </div>


                    <div className={repeatPasswordValidation ? styles.inputMain : `${styles.inputMain} ${styles.wrongInputMain}`}>
                        <input type="password"
                            placeholder='Repeat password'
                            className={styles.inputField}
                            onChange={(event) => inputHandler('repeatPassword', event)}
                            />
                        <FontAwesomeIcon style={{visibility: 'hidden'}} icon={ faLock } className={styles.inputFont}/>
                    </div>
                </div>

                <button className={styles.regBtn}
                        onClick={sendFrom}
                        disabled={btnDisable}
                        >Register</button>

                <div className={styles.loginPrompt}>
                    <p className={styles.loginPromptDetails}>Already registered?</p>
                    <Link to="/login" className={styles.loginPromptLink}>Login</Link>
                </div>
                
            </form>
        </div>


    </>
  )
}

export default Registration;
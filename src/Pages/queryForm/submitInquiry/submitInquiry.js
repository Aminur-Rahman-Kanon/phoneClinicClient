import React, { useEffect } from 'react'
import styles from './submitInquiry.module.css';
import Spinner from '../../../Extra/Spinner/spinner';
import AOS from 'aos';

function SubmitInquiry(props) {

    useEffect(() => {
        AOS.init();
    }, [])
    //repair form
    if (props.type === 'repair'){
        return (
            <div className={styles.submitInquiryMain}>
                <div id="inquiry" className={styles.FormMain}>
                    <Spinner switch={props.spinners} />
                    <form className={styles.Form} ref={props.refs}>
                        <div className={styles.Phone}>
                            <input type="text" required
                                    placeholder={`${props.make}'s make`}
                                    className={styles.Input}
                                    onChange={(event) => props.userInputHandler('make', event)}
                                    />

                            <input type="text" required
                                    placeholder={`${props.make}'s Model`}
                                    className={styles.Input}
                                    onChange={(event) => props.userInputHandler('model', event)}
                                    />
                        </div>
                        
                        <textarea required rows={7} cols={30} placeholder="What's The Problem"
                            maxLength='500'
                            className={styles.Textarea}
                            onChange={(event) => props.userInputHandler('description', event)}
                             />

                        
                        <select defaultValue="Select Service Type"
                                className={styles.Select}
                                onChange={(event) => props.userInputHandler('service', event)}
                                >
                            <option disabled>Select Service Type</option>
                            <option value="Normal">Normal</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                        
                        <textarea rows={7} cols={30} placeholder='Additional Information'
                                  className={styles.Textarea}
                                  maxLength='500'
                                  onChange={(event) => props.userInputHandler('information', event)}
                                  />

                        <div className={styles.Phone}>
                            <input type="text" required
                                   placeholder='Your Name'
                                   className={styles.Input}
                                   maxLength='20'
                                   onChange={(event) => props.userInputHandler('name', event)}
                                   />

                            <input type="number" required
                                   placeholder='Phone Number'
                                   className={styles.Input}
                                   maxLength='11'
                                   onChange={(event) => props.userInputHandler('phone', event)}
                                   />
                        </div>
                        <button className={props.submitBtnDisable ? `${styles.Button} ${styles.Disabled}` : styles.Button}
                                disabled={props.submitBtnDisable}
                                onClick={props.submitQuery}>Book Appoinment</button>
                    </form>
                    
                    <div className={styles.formPic}>
                        <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={props.formImg} alt="FormPic" />
                        <div className={styles.Subform}>
                            <h1>Phone Clinic</h1>
                            <h2>Fill up the form using your information and we will get back to you within an hour</h2>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
    //accessories form
    else if (props.type === 'accessories'){
        return (
            <div className={styles.submitInquiryMain}>
                <div id="inquiry" className={styles.FormMain}>
                    <Spinner switch={props.spinners} />
                    <form className={styles.Form} ref={props.refs}>
                        <div className={styles.Phone}>
                            <input type="text" required
                                    placeholder={`${props.make}'s make`}
                                    className={styles.Input}
                                    onChange={(event) => props.userInputHandler('make', event)}
                                    />

                            <input type="text" required
                                    placeholder={`${props.make}'s Model`}
                                    className={styles.Input}
                                    onChange={(event) => props.userInputHandler('model', event)}
                                    />
                        </div>
                        
                        <textarea required rows={7} cols={30} placeholder="Items Description"
                            maxLength='500'
                            className={styles.Textarea}
                            onChange={(event) => props.userInputHandler('description', event)}
                            />

                        
                        <select defaultValue="Select Service Type"
                                className={styles.Select}
                                onChange={(event) => props.userInputHandler('service', event)}
                                >
                            <option disabled>Select Service Type</option>
                            <option value="Normal">Normal</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                        
                        <textarea rows={7} cols={30} placeholder='Additional Information'
                                  className={styles.Textarea}
                                  maxLength='500'
                                  onChange={(event) => props.userInputHandler('information', event)}
                                  />

                        <div className={styles.Phone}>
                            <input type="text" required
                                   placeholder='Your Name'
                                   className={styles.Input}
                                   maxLength='20'
                                   onChange={(event) => props.userInputHandler('name', event)}
                                   />

                            <input type="number" required
                                   placeholder='Phone Number'
                                   className={styles.Input}
                                   maxLength='11'
                                   onChange={(event) => props.userInputHandler('phone', event)}
                                   />
                        </div>
                        <button className={props.submitBtnDisable ? `${styles.Button} ${styles.Disabled}` : styles.Button}
                                disabled={props.submitBtnDisable}
                                onClick={props.submitQuery}>Book Appoinment</button>
                    </form>
                    
                    <div className={styles.formPic}>
                        <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={props.formImg} alt="FormPic" />
                        <div className={styles.Subform}>
                            <h1>Phone Clinic</h1>
                            <h2>Fill up the form using your information and we will get back to you within an hour</h2>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
    //sale form
    else {
        return (
            <div className={styles.submitInquiryMain}>
                <div id="inquiry" className={styles.FormMain}>
                    <Spinner switch={props.spinners} />
                    <form className={styles.Form} ref={props.refs}>
                        <div className={styles.Phone}>
                            <input type="text" required
                                    placeholder={`${props.make}'s make`}
                                    className={styles.Input}
                                    onChange={(event) => props.userInputHandler('make', event)}
                                    />

                            <input type="text" required
                                    placeholder={`${props.make}'s Model`}
                                    className={styles.Input}
                                    onChange={(event) => props.userInputHandler('model', event)}
                                    />
                        </div>

                        <div className={styles.Phone}>
                            <input type="text" required
                                   placeholder='Color'
                                   className={styles.Input}
                                   maxLength='15'
                                   onChange={(event) => props.userInputHandler('color', event)}
                                   />

                            <input type="text" required
                                   placeholder='Storage'
                                   className={styles.Input}
                                   maxLength='6'
                                   onChange={(event) => props.userInputHandler('storage', event)}
                                   />
                        </div>
                        
                        <select defaultValue="Select Condition"
                                className={styles.Select}
                                onChange={(event) => props.userInputHandler('condition', event)}
                                >
                            <option disabled >Select Condition</option>
                            <option value="New">Normal</option>
                            <option value="Used">Urgent</option>
                        </select>
                        
                        <textarea rows={7} cols={30} placeholder='Additional Information'
                                  className={styles.Textarea}
                                  maxLength='500'
                                  onChange={(event) => props.userInputHandler('information', event)}
                                  />

                        <div className={styles.Phone}>
                            <input type="text" required
                                   placeholder='Your Name'
                                   className={styles.Input}
                                   maxLength='20'
                                   onChange={(event) => props.userInputHandler('name', event)}
                                   />

                            <input type="number" required
                                   placeholder='Phone Number'
                                   className={styles.Input}
                                   maxLength='11'
                                   onChange={(event) => props.userInputHandler('phone', event)}
                                   />
                        </div>
                        
                        <button className={props.submitBtnDisable ? `${styles.Button} ${styles.Disabled}` : styles.Button}
                                disabled={props.submitBtnDisable}
                                onClick={props.submitQuery}>Book Appoinment</button>
                    </form>
                    
                    <div className={styles.formPic}>
                        <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={props.formImg} alt="FormPic" />
                        <div className={styles.Subform}>
                            <h1>Phone Clinic</h1>
                            <h2>Fill up the form using your information and we will get back to you within an hour</h2>
                        </div>
                    </div>
                </div>
           </div>
        )
    }
}

export default SubmitInquiry

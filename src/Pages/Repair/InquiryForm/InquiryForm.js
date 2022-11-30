import React, { Component, createRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from './InquiryForm.module.css';
import form from '../../../Assets/Images/others/form.png';
import call from '../../../Assets/Images/others/call.png';
import shop from '../../../Assets/Images/others/shop.png';
import banner from '../../../Assets/Images/others/banner.png';
import aos from 'aos';
import 'aos/dist/aos.css';
import Modal from '../../../Extra/Modal/Modal';
import GetAquote from '../../../Extra/GetAqoute/GetAquote';
import withParams from '../../../Hoc/withparams/withParams';
import { phonePic, accessories, tabletPic, laptop, pcImage, inquiryFormDetails } from '../../../data/data';
import Spinner from '../../../Extra/Spinner/spinner';

class InquiryForm extends Component {

    constructor(props) {
        super(props);
        this.formRef = createRef()
        this.state = {
            modalValue: false,
            queryFail: false,
            submitForm: false,
            errorMsg: false,
            spinner: false,
            //this form is for everything else except sale query
            others: {
                make: { value: '', validation: true },
                model: { value: '', validation: true },
                problem: { value: '', validation: true },
                service: { value: '', validation: true },
                information: { value: '', validation: true },
                name: { value: '', validation: true },
                phone: { value: '', validation: true }
            },
            // This form is for sale query
            sale: {
                make: { value: '', validation: true },
                model: { value: '', validation: true },
                color: { value: '', validation: true },
                storage: { value: '', validation: true },
                condition: { value: '', validation: true },
                information: { value: '', validation: true },
                name: { value: '', validation: true },
                phone: { value: '', validation: true },
            },
            formValidate: true
        };

        this.repairQuery = this.repairQuery.bind(this);

        this.submitInfo = this.submitInfo.bind(this);
    }

    componentDidMount () {
        window.scrollTo(0, 0);
        aos.init({duration: 1200});
    
        if (window.location.pathname === '/inquiry') {
            document.getElementById('inquiry').scrollIntoView();
        }
        
        if (window.location.pathname === '/inquiry') {
            document.getElementById('inquiry').scrollIntoView();
        }

        if (Object.keys(this.props.params).length > 0 && this.props.params.queryId === 'repair') {
            const rawObject = this.state.others;
            rawObject.make.value = this.props.params.itemId;
            rawObject.model.value = this.props.params.model;

            this.setState({ ...rawObject })
        }
    }

    formValidation (value, type) {
        let result = false;

        switch(type){
            case 'make':
                if (value.length >= 3) {
                    result = true;
                }
                else {
                    result = false;
                }

            break;

            case 'model':
                if (value.length >= 1) {
                    result = true;
                }
                else {
                    result = false;
                }
            
            break

            case 'color':
                if (value.length >= 3) {
                    result = true;
                }
                else {
                    result = false;
                }
            
            break;

            case 'storage':
                if (value.length >= 3) {
                    result = true;
                }
                else {
                    result = false;
                }

            break;

            case 'problem':
                if (value.length >= 5){
                    result = true
                }
                else {
                    result = false
                }

            break;

            case 'condition':
                if (value !== ''){
                    result = true
                }
                else {
                    result = false
                }

            break;

            case 'service':
                if (value !== ''){
                    console.log(value)
                    result = true
                }
                else {
                    result = false
                }

            break;

            case 'information':
                if (value.length >= 5){
                    result = true
                }
                else {
                    result = false
                }

            break;

            case 'name':
                if (value.length >=5){
                    result = true
                }
                else {
                    result = false
                }

            break;

            case 'phone':
                if (/^\d+$/.test(value) && value.length >= 11){
                    result = true
                }
                else {
                    result = false
                }

            break;

            default :
                result = false;

        }
        return result;
    }

    finalValidation (mainItem) {
        let isValue = true;
        let isValid = true;

        for (let key in mainItem){
            isValue = mainItem[key].value !== '' && isValue === true;
            isValid = mainItem[key].validation === true && isValid === true;
        }

        if (isValue === true && isValid === true){
            return false;
        }

        else {
            return true;
        }
    }

    userInput (event, type, queryId) {

        let formType = queryId === 'sale' ? 'sale' : 'others';
        const mainState = {...this.state};
        const subForm = {...this.state[formType]}

        subForm[type].value = event.target.value;

        const values = subForm[type].value;
        const validate = this.formValidation(values, type);
        
        subForm[type].validation = validate;
        
        const validation = this.finalValidation(subForm);
        mainState.formValidate = validation;
        mainState[formType] = subForm;

        this.setState({ ...mainState });
    }

    sendInquiry (event) {
        event.preventDefault();
    };

    switchModal (){
        this.setState({ modalValue: true })
    }

    switchQueryFail () {
        this.setState({ queryFail: true })
    }

    toggleModal () {
        this.setState({ modalValue: false })
    }

    toggleModalFail () {
        this.setState({ queryFail: false })
    }

    repairQuery(event) {
        event.preventDefault();
        this.setState({ spinner: true })

        emailjs.sendForm('service_fbs0hdc', 'template_14ri5zp', event.target, 'L6dnN0lceL_wady9M')
                .then((result) => {
                    this.setState({ submitForm: true, modalValue: true, spinner: false })
                }, (error) => {
                    console.log(error);
                    this.setState({ errorMsg: true, modalValue: true, spinner: false })
                });
    }

    submitInfo(event) {
        event.preventDefault();
        this.setState({ spinner: true })

        emailjs.sendForm('service_fbs0hdc', 'template_p7oyqcr', event.target, 'L6dnN0lceL_wady9M')
                .then((result) => {
                    this.setState({ submitForm: true, modalValue: true, spinner: false })
                }, (error) => {
                    this.setState({ errorMsg: true, modalValue: true, spinner: false })
                });
    }

    closeModal = () => {
        this.setState({ modalValue: false })
        this.props.navigate('/');
    }

    letRetry = () => {
        this.setState({ modalValue: false, errorMsg: false })
    }

    render () {
        let mainItem = 'phonerepair';
        let formType = null;
        let formTypes = null;
        let formField = null;
        let queryId = 'repair';
        let deviceId = 'phone';
        let itemId = 'apple';
        
        if (Object.keys(this.props.params).length > 0) {
            queryId = this.props.params.queryId;
            deviceId = this.props.params.deviceId;
            itemId = this.props.params.itemId;    
            mainItem = deviceId.concat(queryId);    
        }

        formType = queryId === 'sale' ? 'sale' : 'others';
        
        //sale
        if (queryId === 'sale'){
            formField = <div className={styles.Phone}>
                            <input type="text" required placeholder='Color' name='color' className={this.state[formType].color.validation ? styles.Input : styles.Input + ' '+ styles.WrongInput}
                                onChange={(event) => this.userInput(event, 'color', queryId)} maxLength='15'/>
                            <input type="text" required placeholder='Storage' name='storage' className={this.state[formType].storage.validation ? styles.Input : styles.Input + ' '+ styles.WrongInput} 
                                onChange={(event) => this.userInput(event, 'storage', queryId)} maxLength='6'/>
            </div>

            formTypes = this.submitInfo;
        }
        
        //repair
        else if (queryId === 'repair') {
            formField = <textarea name='problem' required rows={7} cols={30} placeholder="What's The Problem"
                            onChange={(event) => this.userInput(event, 'problem')} maxLength='500'
                            className={this.state[formType].problem.validation ? styles.Textarea : styles.Textarea + ' '+ styles.WrongText} />
            
            formTypes = this.repairQuery;
        }
        
        //accessories
        else if (queryId === 'accessories'){
            formField = <textarea name='description' required rows={7} cols={30} placeholder="Item Description"
                            onChange={(event) => this.userInput(event, 'problem')} maxLength='500'
                            className={this.state[formType].problem.validation ? styles.Textarea : styles.Textarea + ' '+ styles.WrongText} />
            
            formTypes = this.repairQuery;
        }

        let details = inquiryFormDetails[mainItem]['details'];

        let img = null;

        let footerImg = null;
        
        if (queryId === 'accessories' && deviceId === 'phone') {
            img = <img src={accessories.phoneImg[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={accessories.phoneImg[itemId]} alt="FormPic" />
        }

        else if (deviceId === 'phone') {
            img = <img src={phonePic[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={phonePic[itemId]} alt="FormPic" />
        }

        if (queryId === 'accessories' && deviceId === 'tablet') {
            img = <img src={accessories.tabletImg[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={accessories.tabletImg[itemId]} alt="FormPic" />
        }
        else if (deviceId === 'tablet') {
            img = <img src={tabletPic[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={tabletPic[itemId]} alt="FormPic" />
        }
        if (queryId === 'sale' && deviceId === 'laptop') {
            img = <img src={laptop.logo[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={laptop.logo[itemId]} alt="FormPic" />
        }

        else if (queryId === 'repair' && deviceId === 'laptop') {
            img = <img src={laptop.laptopPic[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={laptop.laptopPic[itemId]} alt="FormPic" />
        }
        
        else if (queryId === 'accessories' && deviceId === 'laptop') {
            img = <img src={pcImage[itemId]} alt="device"/>
            footerImg = <img data-aos="fade-down-left" data-aos-easing="ease-out-cubic" src={pcImage[itemId]} alt="FormPic" />
        }

        let div1  = <div className={styles.Img}> 
            <div data-aos="fade-down-right" data-aos-easing="ease-out-cubic" className={styles.Subimg}>
                {img}
            </div>

            <div className={styles.Subpara}>
                <h1>Phone Clinic</h1>
                <div className={styles.ParaHeader}>
                    <h4>{details['p2']}</h4>
                    <div className={styles.Subparaheader}>
                        <h4>We will get back to you within an hour</h4>
                        <h4>Or Call 020 7237 2724</h4>
                    </div>
                </div>
            </div>
        </div>

        let div2 = <div className={styles.MainHeading}>

            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" className={styles.MainImg}>
                <img src={banner} alt={banner}/>
            </div>

            <div className={styles.MainHeadingPara}>
                <div  className={styles.Subform}>
                    <h2>Phone Clinic</h2>
                    {details['p1']}
                    <p>Quite often we remain busy serving our customer, for that our website aren't always updated with our stock</p>
                    <p>If you cant find what you looking for, Please fill up the form</p>
                    <p><strong>Or Call 020 7237 2724</strong></p>
                </div>
            </div>

        </div>

        let div3 = <div className={styles.Heading}>
            <h2>{details['h1']}</h2>

            <div className={styles.SubHeading}>
                <div className={styles.Subs}>
                    <img src={form} alt="form" />
                    <h3>{details['h2']}</h3>
                </div>

                <div className={styles.Subs}>
                    <img src={call} alt="call" />
                    <h3>You will receive a phone call about your appoinment time and price within an hour</h3>
                </div>

                <div className={styles.Subs}>
                    <img src={shop} alt="shop" />
                    <h3>{details['h3']}</h3>
                </div>
            </div>
        </div>

        let displayMsg = null;

        if (this.state.submitForm){
            displayMsg = <div className={styles.msgContainer}>
                <div className={styles.msgBody}>
                    <h3>Thanks for your query</h3>
                    <p>We will get back to you ASAP</p>
                </div>
                <button className={styles.msgBtn} onClick={this.closeModal}>Have a nice day</button>
            </div>
        }
        else if (this.state.errorMsg){
            displayMsg = <div className={styles.msgBody}>
                <div className={styles.msgContainer}>
                    <h3>Something went wrong</h3>
                    <p>Please check your internet connection</p>
                </div>
                <button className={styles.msgBtn} onClick={this.letRetry}>Retry</button>
            </div>
        }

        return (
            <>
                <Modal switch={this.state.modalValue}>
                    {displayMsg}
                </Modal>
                {div1}
    
                <div className={styles.Modal}>
                    {this.state.modalValue ? <Modal backDropValue={this.state.modalValue} backDropToggle={this.toggleModal}/> : null}
                </div>
    
                <div className={styles.Modal}>
                    {this.state.queryFail ? <Modal queryFail={this.state.queryFail} backDropValue={this.state.queryFail} backDropToggle={this.toggleModalFail}/> : null}
                </div>
    

                {div2}

                {div3}
    

                <div id="inquiry" className={styles.FormMain}>
                    <Spinner switch={this.state.spinner} />
                    <form className={styles.Form} onSubmit={formTypes}>
                        <div className={styles.Phone}>
                            <input readOnly name='serviceType' value={queryId} className={styles.Hidden} />
                            <input readOnly name='deviceName' value={deviceId} className={styles.Hidden} />
                            <input type="text" required placeholder={`${deviceId}'s make`} name='make' 
                                    className={this.state[formType].make.validation ? styles.Input : styles.Input + ' '+ styles.WrongInput}
                                    value={this.state.others.make.value ? this.state.others.make.value : ''}
                                    onChange={(event) => this.userInput(event, 'make', queryId)} maxLength='10' ref={this.formRef}/>
                            <input type="text" required placeholder={`${deviceId}'s Model`} name='model' 
                                    className={this.state[formType].model.validation ? styles.Input : styles.Input + ' '+ styles.WrongInput}
                                    value={this.state.others.model.value ? this.state.others.model.value : ''}
                                    onChange={(event) => this.userInput(event, 'model', queryId)} maxLength='20'/>
                        </div>
                        {formField}
                        {queryId === 'sale' ? 
                        <select name='condition' required defaultValue="Select Condition" className={this.state[formType].condition.validation ? styles.Select : styles.Select+ ' '+ styles.WrongSelect}
                                onChange={(event) => this.userInput(event, 'condition', queryId)}>
                            <option disabled={true}>Select Condition</option>
                            <option value="new">New</option>
                            <option value="used" >Used</option>
                        </select>
                        :
                        <select name='service' defaultValue="Select Service Type" className={this.state[formType].service.validation ? styles.Select : styles.Select+ ' '+ styles.WrongSelect}
                                onChange={(event) => this.userInput(event, 'service', queryId)}>
                            <option disabled={true}>Select Service Type</option>
                            <option value="Normal">Normal</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                        }
                        <textarea name='information' rows={7} cols={30} placeholder='Additional Information' className={this.state[formType].information.validation ? styles.Textarea : styles.Textarea+ ' '+ styles.WrongText}
                                  onChange={(event) => this.userInput(event, 'information', queryId)} maxLength='500'/>    
                        <div className={styles.Phone}>
                            <input type="text" required placeholder='Your Name' name='name' className={this.state[formType].name.validation ? styles.Input : styles.Input+ ' ' + styles.WrongInput}
                                               onChange={(event) => this.userInput(event, 'name', queryId)} maxLength='20'/>
                            <input type="number" required placeholder='Phone Number' name='contact' className={this.state[formType].phone.validation ? styles.Input : styles.Input+ ' ' + styles.WrongInput}
                                               onChange={(event) => this.userInput(event, 'phone', queryId)} maxLength='11'/>
                        </div>    
                        <button type='submit' disabled={this.state.formValidate} className={this.state.formValidate ? styles.Button+ ' '+ styles.Disabled : styles.Button}>Book Appoinment</button>
                    </form>
                    
                    <div className={styles.formPic}>
                        {footerImg}
                        <div className={styles.Subform}>
                            <h1>Phone Clinic</h1>
                            <h2>Fill up the form using your information and we will get back to you within an hour</h2>
                        </div>

                    </div>

                </div>
    
                <GetAquote />
            </>
        )
    }
}

export default withParams(InquiryForm);

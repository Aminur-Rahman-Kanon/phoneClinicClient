import React, { useEffect, useState } from 'react'
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
import { phonePic, accessories, tabletPic, laptop, pcImage, inquiryFormDetails } from '../../../data/data';
import SubmitInquiry from '../submitInquiry/submitInquiry';
import { useParams } from 'react-router-dom';

const InquiryForm = () => {

    const params = useParams();
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [storage, setStorage] = useState('');
    const [description, setDiscription] = useState('');
    const [condition, setCondition] = useState('');
    const [service, setService] = useState('');
    const [information, setInformation] = useState('')
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        aos.init({duration: 1200});
        
        if (window.location.pathname === '/inquiry') {
            document.getElementById('inquiry').scrollIntoView();
        }
    }, [])

    useEffect(() => {
        if (make.length > 0 && model.length > 0 && description.length > 0 && service.length > 0 && name.length > 0 && phone.length > 0){
            setBtnDisable(false);
        }
        else {
            setBtnDisable(true);
        }
    }, [make, model, description, service, name, phone])

    const inputHandler = (id, event) => {
        switch(id){
            case 'make':
                setMake(event.target.value);
                break;

            case 'model':
                setModel(event.target.value);
                break;

            case 'color':
                setColor(event.target.value);
                break;

            case 'storage':
                setStorage(event.target.value);
                break;

            case 'description':
                setDiscription(event.target.value);
                break;

            case 'condition':
                setCondition(event.target.value);
                break;

            case 'service':
                setService(event.target.value);
                break;
            
            case 'information':
                setInformation(event.target.value);
                break;

            case 'name':
                setName(event.target.value);
                break;

            case 'phone':
                setPhone(event.target.value);
                break;

            default:
                break;
        }
    }

    let queryId = params.queryId ? params.queryId : 'repair';
    let deviceId = params.deviceId ? params.deviceId : 'phone';
    let itemId = params.itemId ? params.itemId : 'apple';
    let mainItem = params.deviceId ? deviceId.concat(queryId) : 'phonerepair';
    
    let details = inquiryFormDetails[mainItem]['details'];
    let img = null;
    let formImage = null;
    
    if (queryId === 'accessories' && deviceId === 'phone') {
        img = <img src={accessories.phoneImg[itemId]} alt="device"/>
        formImage = accessories.phoneImg[itemId];
    }
    else if (deviceId === 'phone') {
        img = <img src={phonePic[itemId]} alt="device"/>
        formImage = phonePic[itemId]
    }
    else if (queryId === 'accessories' && deviceId === 'tablet') {
        img = <img src={accessories.tabletImg[itemId]} alt="device"/>
        formImage = accessories.tabletImg[itemId]
    }
    else if (deviceId === 'tablet') {
        img = <img src={tabletPic[itemId]} alt="device"/>
        formImage = tabletPic[itemId]
    }
    else if (queryId === 'sale' && deviceId === 'laptop') {
        img = <img src={laptop.logo[itemId]} alt="device"/>
        formImage = laptop.logo[itemId]
    }
    else if (queryId === 'repair' && deviceId === 'laptop') {
        img = <img src={laptop.laptopPic[itemId]} alt="device"/>
        formImage = laptop.laptopPic[itemId]
    }
    else if (queryId === 'accessories' && deviceId === 'laptop') {
        img = <img src={pcImage[itemId]} alt="device"/>
        formImage = pcImage[itemId]
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

    if (error){
        displayMsg = <div className={styles.msgBody}>
            <div className={styles.msgContainer}>
                <h3>Something went wrong</h3>
                <p>Please check your internet connection</p>
            </div>
            <button className={styles.msgBtn} onClick={() => window.location.reload()}>Retry</button>
        </div>
    }
    else {
        displayMsg = <div className={styles.msgContainer}>
            <div className={styles.msgBody}>
                <h3>Thanks for your query</h3>
                <p>We will get back to you ASAP</p>
            </div>
            <button className={styles.msgBtn} onClick={() => window.location.reload()}>Have a nice day</button>
        </div>
    }

    const repairQuery = (event) => {
        event.preventDefault();
        setSpinner(true);

        const queryParams = {
            query: queryId, deviceType: deviceId, make, model, description, service, information, name, phone
        }

        emailjs.send('service_fbs0hdc', 'template_14ri5zp', queryParams, 'L6dnN0lceL_wady9M')
                .then((result) => {
                    setSpinner(false);
                    setModal(true);
                }, (error) => {
                    setSpinner(false);
                    setError(true);
                    setModal(true);
                });
    }

    const saleQuery = (event) => {
        event.preventDefault();
        setSpinner(true);

        const queryParams = {
            query: queryId, device: deviceId, make, model, color, storage, condition, information, name, phone
        }

        emailjs.send('service_fbs0hdc', 'template_p7oyqcr', queryParams, 'L6dnN0lceL_wady9M')
                .then((result) => {
                    setSpinner(false);
                    setModal(true);
                }, (error) => {
                    setSpinner(false);
                    setError(true);
                    setModal(true);
                });
    }

    return (
        <>
            <Modal switch={modal}>
                {displayMsg}
            </Modal>
            {div1}

            {div2}

            {div3}

            <SubmitInquiry type={queryId}
                            formImg={formImage}
                            spinners={spinner}
                            make={deviceId}
                            userInputHandler={inputHandler}
                            submitQuery={queryId === 'sale' ? saleQuery : repairQuery}
                            submitBtnDisable={btnDisable}
                            />
            <GetAquote />
        </>
    )
}

export default InquiryForm;

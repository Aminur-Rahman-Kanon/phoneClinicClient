import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCheckCircle, faAward } from '@fortawesome/free-solid-svg-icons';
import aos from 'aos';
import 'aos/dist/aos.css';
import styles from './CurrencyConverter.module.css';
import { currencyData } from '../../data/data';
import Modal from '../../Extra/Modal/Modal';

class CurrencyConverter extends Component {

    state = {
        default: 'Select A Country',
        rate: {},
        selectValue: '',
        inputValue: '',
        queryResult: '',
        url: '/freecurrencyapi.net/api/v2/latest?apikey=cfaac5f0-8125-11ec-ad91-b75c453dc9f3',
        loader : true,
        errorMsg: ''
    }

    componentDidMount () {
        window.scrollTo(0, 0);
        aos.init({duration: 1300});

        axios.get('https://phoneclinic.herokuapp.com/https://freecurrencyapi.net/api/v2/latest?apikey=cfaac5f0-8125-11ec-ad91-b75c453dc9f3')
        .then(res => {
            this.setState({rate: res.data.data, loader: false})
        }).catch(error => {
            this.setState({ errorMsg: error.message })
        })
    }

    getResult = (event) => {
        const reg = new RegExp('^[0-9]*$');
        if (reg.test(event.target.value)){
            // console.log(this.state.inputValue);
            this.setState({inputValue: event.target.value})
        }
        else{
            alert('Please Enter Numbers Only');
        }
    }

    selectCountry = (event) => {
        this.setState({selectValue: event.target.value})
    }

    getQuery = () => {
        const gbp = this.state.rate.GBP;
        const selectCountryRate = this.state.rate[this.state.selectValue];
        let result = ((selectCountryRate*this.state.inputValue) / gbp).toFixed(2);
        this.setState({queryResult: result});
    }

    render () {
        const option = Object.keys(this.state.rate).sort().map(item => {
            return <option key={item} value={item}>{currencyData[item]}</option>
        })

        let mainDisplay = Object.keys(this.state.rate).length !== 0 ? <div data-aos="fade-left" data-aos-easing="ease-out-cubic" className={styles.Details}>
                        <h1>Send Money From The UK</h1>
                        <h3>Send money to all over the world via trusted company from our shop</h3>
                        <div className={styles.SubDetails}>
                            <div className={styles.Input}>
                                <select defaultValue="" onChange={this.selectCountry} required>
                                    <option disabled={true} value="">Select A Country</option>
                                    {option}
                                </select>
        
                                <input type="text" value={this.state.inputValue}
                                                    onChange={this.getResult}
                                                    placeholder='Amount'/>
                            </div>
                            
                            <div className={styles.Query}>
                                <h2>{this.state.queryResult}</h2>
                            </div>
                            
                            <button className={this.state.inputValue === '' || this.state.selectValue === '' ? styles.submitBtnDisabled : styles.submitBtn}
                                    disabled={ this.state.inputValue === '' || this.state.selectValue === '' ? true : false }
                                    onClick={this.getQuery}>Check Rates</button>

                        </div>    
                    </div> : null
        
        const displayErrorMsg = <div className={styles.errorMsgMain}>
            <div className={styles.errorMsgDetails}>
                <h2>Something went wrong</h2>
                <h3>Please check your internet connection</h3>
            </div>
            <button className={styles.errorMsgBtn} onClick={() => window.location.reload()}>Retry</button>
        </div>
        
        return (
            <>
                <Modal switch={this.state.errorMsg} >
                    {displayErrorMsg}
                </Modal>
                
                <div className={styles.Main}>
                    {mainDisplay}
                    <div style={{display: this.state.loader ? 'flex' : 'none'}} className={styles.loading}>
                        <div className={styles.loader}></div>
                    </div>
                </div>

                <div className={styles.HeadingMain}>
                    <h1>Send Money securely with us</h1>

                    <div className={styles.Heading}>
                        <div>
                            <FontAwesomeIcon className={styles.Font} icon={faAward} size='4x' />
                            <h2>Trusted Brands</h2>
                            <p>Send money with the top trusted company.</p>
                        </div>

                        <div>
                            <FontAwesomeIcon className={styles.Font} icon={faCheckCircle} size='4x'/>
                            <h2>Hassle Free</h2>
                            <p>Sending money from our shop is completely hassle free.</p>
                        </div>

                        <div>
                            <FontAwesomeIcon className={styles.Font} icon={faShieldAlt} size='4x' />
                            <h2>Secure Transaction</h2>
                            <p>All our transaction is 100% secure and your information will be safe.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CurrencyConverter;

import React, { Component } from 'react';
import axios from 'axios';
import styles from './CurrencyExchange.module.css';
import { currencyData } from '../../data/data';


class CurrencyExchange extends Component {

    state = {
        rates: {},
        from: '',
        to: '',
        amount: '',
        result: '',
        sameCurrency: false,
        btnDisable: true
    }

    componentDidMount () {
        window.scrollTo(0, 0);
        
        axios.get('https://openexchangerates.org/api/latest.json?app_id=02e19846c5224d9aa04c14a35ddf86c5')
        .then(res => {
            const initValue = res.data.rates['AED']
            this.setState({ rates: res.data.rates, from: initValue.toString()})
        }).catch(err => {
            console.log(err);
        })
    }

    SelectCountry (event, type) {
        const copyState = {...this.state};

        let item = copyState[type];

        let check = null;

        item = event.target.value;

        copyState[type] = item;

        if (copyState.from === copyState.to){
            check = true;
        }
        else {
            check = false;
        }

        copyState['sameCurrency'] = check;
        
        this.setState({...copyState})
    }

    getResult () {

        const from = this.state.from;

        const to = this.state.to;

        const amount = this.state.amount;

        const results = ((to * amount) / from).toFixed(2);

        if (isNaN(results)){
            this.setState({ result: 'Not found' })
        }
        else {
            this.setState({ result: results });
        }

    }

    render () {

        const countries = Object.keys(currencyData).map(item => {
            return <option key={item} value={this.state.rates[item]}>{currencyData[item]}</option>
        })

        return (
            <div className={styles.Main}>

                <div className={styles.Details}>
                    <h2 className={styles.h2}>The Best and fastest way to Exchange currrencies</h2>

                    <p className={styles.p}>At Phone Clinic, We offer currency exchange from almost all currrencies. We Proud to offer
                        the best and the most updated rates in this area. You can check the price before you come to the store.
                        All you have to do is, Select the currency you want to convert from and select the currency you want to
                        convert to and the amount you wish to convert. That's It.
                    </p>

                </div>
                

                <div className={styles.Form}>
                    <form>
                        <div className={styles.Section}>
                            <label>From</label>
                            <select defaultValue="Select a country"
                                    onChange={(event) => this.SelectCountry(event, 'from')}>
                                <option disabled selected>Select a country</option>
                                {countries}
                            </select>
                        </div>
                        
                        <div className={styles.Section}>
                            <label>To</label>
                            <select defaultValue="Select a country"
                                    style={this.state.sameCurrency ? {border: '1px solid #ed8f8f', boxShadow: '0px 0px 11px 3px #ed8f8f'} : null}
                                    onChange={(event) => this.SelectCountry(event, 'to')}>
                                <option disabled selected>Select a country</option>
                                {countries}
                            </select>
                        </div>

                        <div className={styles.Section}>
                            <label>Amount</label>
                            <input type="number" onChange={(event) => this.SelectCountry(event, 'amount')}/>
                        </div>

                        <div className={styles.Section}>
                            <h3>{this.state.result}</h3>
                        </div>

                        
                    </form>

                    <button disabled={this.state.sameCurrency ? true : false} 
                            onClick={() => this.getResult()}
                            className={this.state.sameCurrency ? styles.Button + ' ' + styles.Disable : styles.Button}
                            >Get Result</button>
                </div>


            </div>
        )
    }
}

export default CurrencyExchange;

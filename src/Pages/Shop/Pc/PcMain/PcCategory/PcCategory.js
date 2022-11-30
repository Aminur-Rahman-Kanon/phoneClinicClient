import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PcItems from '../../PcItems/PcItems';
import styles from './PcCategory.module.css';

class PcCategory extends Component {

    shouldComponentUpdate (prevProps) {
        if (prevProps.device !== this.props.device){
            return true;
        }
        else {
            return false;
        }
    }

    render () {
        let item = null;
        let dir = null;

        if (this.props.device === 'laptop' && this.props.query === 'accessories'){
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/accessories/laptop/${item}/inquiry`;
                return <Link key={index} to={dir}>
                    <PcItems key={item} img={this.props.img[item]} 
                                    items={this.props.data[item]} 
                                    data={this.props.data}/>
                </Link>
            })
        }

        else if (this.props.device === 'laptop' && this.props.query === 'sale') {
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/sale/laptop/${item}/inquiry`
                return <Link key={index} to={dir}>
                    <PcItems key={item} 
                            img={this.props.img[item]} 
                            items={item}
                            device={this.props.device} />
                </Link>
            })
        }

        else if(this.props.device === 'tablet' && this.props.query === 'sale') {
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/sale/tablet/${item}/inquiry`;
                return <Link key={index} to={dir}>
                    <PcItems key={item} img={this.props.img[item]} 
                                    items={item} 
                                    data={this.props.data}/>
                </Link>
            })
        }
        else if(this.props.device === 'tablet' && this.props.query === 'accessories') {
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/accessories/tablet/${item}/inquiry`;
                console.log(dir);
                return <Link key={index} to={dir}>
                    <PcItems key={item} img={this.props.img[item]} 
                                    items={item} 
                                    data={this.props.data}/>
                </Link>
            })
        }

        else if (this.props.device === 'phone' && this.props.query === 'accessories') {
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/accessories/${this.props.device}/${item}/inquiry`;
                return <Link key={index} to={dir}>
                    <PcItems key={item} 
                            img={this.props.img[item]} 
                            items={item}
                            device={this.props.device} />
                </Link>
            })
        }
        else if (this.props.device === 'phone' && this.props.query === 'sale') {
            item = Object.keys(this.props.data).map((item, index) => {
                dir = `/sale/${this.props.device}/${item}/inquiry`;
                return <Link key={index} to={dir}>
                    <PcItems key={item} 
                            img={this.props.img[item]} 
                            items={item}
                            device={this.props.device} />
                </Link>
            })
        }
        
        return (
            <div className={styles.Main}>
                {this.props.device === 'pc' ? <h2>Shop By Category</h2> : null}
                
                <div className={styles.Shop}>
                    {item}
                </div>
            </div>
        )
    }
}


export default PcCategory;

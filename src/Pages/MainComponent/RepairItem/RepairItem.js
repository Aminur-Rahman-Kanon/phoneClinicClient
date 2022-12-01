import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from './RepairItem.module.css';


class RepairItem extends Component {

    render () {

        const padding = this.props.device === 'tablet' ? '10px' : null
        
        let dir = null;
        if (this.props.device === "phone"){
            dir = `/repair/phone/${this.props.model}`;
        }
        else if (this.props.device === "tablet"){
            dir = `/repair/tablet/${this.props.model}`;
        }
        else if (this.props.device === "laptop"){
            dir = `/repair/laptop/${this.props.dir}/inquiry`;
        }

        return (
            <Link to={dir} className={styles.Main} style={{padding: padding}} >
                <img src={this.props.img} alt={this.props.img}/>
                <p>{this.props.model}</p>
            </Link>
        )

    }
} 

export default RepairItem;

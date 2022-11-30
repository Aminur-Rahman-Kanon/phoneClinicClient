import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Aux from "../../../Hoc/Aux/Aux";
import GetAquote from "../../../Extra/GetAqoute/GetAquote";
import { Link } from 'react-router-dom';
import styles from './ItemListings.module.css'

class ItemListings extends Component {

    state = {
        pageNumber: 0
    }

    changePage = ({ selected }) => {
        let currentPage = {...this.state.pageNumber};
        currentPage = selected;

        this.setState({ pageNumber: currentPage })
    }

    componentDidMount () {
        console.log('itemListing')
    }

    render () {
        let displayItem = null;
        let product = this.props.product;
        //Pagination system
        let pageVisited = 0;
        
        const itemPerpage = 3;
        pageVisited = this.state.pageNumber * itemPerpage;

        if (this.props.query === 'accessories') {
            if (this.props.device === 'utilities'){
                displayItem = Object.keys(product).slice(pageVisited, pageVisited+itemPerpage).map((item, index) => {
                    let dir = `/${this.props.query}/${this.props.route}/${this.props.device}/${this.props.product[item]['name']}/inquiry`
                    console.log(dir);
                    return <div key={item} className={styles.Items}>
                        <Link to={dir}>
                            <img src={product[item]['img']} alt={item}/>
                            <div className={styles.Details}>
                                <h3>{product[item]['details']}</h3>
                            </div>
                        </Link>
                    </div>
                });
            }
            else {
                displayItem = Object.keys(product).slice(pageVisited, pageVisited+itemPerpage).map(item => {
                    let dir = `/${this.props.query}/${this.props.route}/${this.props.device}/inquiry`
                    console.log(dir);
                    return <div key={item} className={styles.Items}>
                        <Link to={dir}>
                            <img src={product[item]['img']} alt={item}/>
                            <div className={styles.Details}>
                                <h3>{product[item]['details']}</h3>
                            </div>
                        </Link>
                    </div>
                });
            }
        }
        else{
            
            displayItem = Object.keys(product).slice(pageVisited, pageVisited+itemPerpage).map(item => {
                let dir = `/sale/${this.props.route}/${this.props.device}/inquiry`
                console.log(dir);
                return <div key={item} className={styles.Items}>
                    <Link to={dir}>
                        <img src={product[item]['img']} alt={item}/>
                        <div className={styles.Details}>
                            <h3>{product[item]['details']}</h3>
                        </div>
                    </Link>
                </div>
            });
        }

        const pageCount = Math.ceil(Object.keys(product).length / itemPerpage)

        

        if (Object.keys(this.props.product).length === 0) {
            displayItem = <h3 className={styles.Empty}>Sorry No Item</h3>
        }


        return (
            <Aux>

                <div className={styles.Main}>
                    {displayItem}
                </div>

                <div className={styles.PaginationMain}>
                    <ReactPaginate 
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={this.changePage}
                        containerClassName={styles.paginationBtn}
                        previousLinkClassName={styles.previousBtn}
                        nextLinkClassName={styles.nextBtn}
                        desabledLinkClassName={styles.disable}
                        activeLinkClassName={styles.active}/>
                </div>

                <div>
                    <GetAquote device="pc"/>
                </div>

            </Aux>

        )
    }

}

export default ItemListings;

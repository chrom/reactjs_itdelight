import React from 'react';
import PaginationItem from './pagination/PaginationItem';
import CardInPage from './pagination/CardInPage';
import Direction from './pagination/Direction';
import {Link} from "react-router-dom";

export default class Pagination extends React.Component {

    getAllPages() {
        let increment = (this.props.list.body.pagination.total % this.props.list.body.pagination.itemsOnPage) ? 1 : 0;
        return parseInt(this.props.list.body.pagination.total / this.props.list.body.pagination.itemsOnPage) + increment;
    }

    render() {
        return (
            <div className="uk-margin-medium-bottom uk-flex">
                <div className="uk-width-medium uk-flex-left">
                    <span>Row total: {this.props.list.body.pagination.total}</span>
                </div>

                <ul className="uk-pagination uk-flex" data-uk-margin>
                    <li>
                        <Link to={`#`}>
                    <span data-uk-pagination-previous>
                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio={1}>
                      <polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"/>
                    </svg></span>
                        </Link>

                    </li>
                    <PaginationItem paginationItems={this.getAllPages()} pagination={this.props.list.body}/>
                    <li>
                        <Link to={`#`}><span data-uk-pagination-next>
                    <svg width={7} height={12} viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio={1}>
                      <polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"/>
                    </svg></span>
                        </Link>
                    </li>
                </ul>

                <div className="uk-width-medium uk-flex-right">
                    <CardInPage pagination={this.props.list.body}/>
                </div>

                <div className="uk-width-medium uk-flex-right">
                    <Direction pagination={this.props.list.body}/>
                </div>

            </div>
        );
    }
}

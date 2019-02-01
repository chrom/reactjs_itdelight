import React from 'react';


export default class PaginationItem extends React.Component {

    getItems() {
        let listItems = [];


        for (let i = 1; i <= this.props.paginationItems; i++) {
            listItems[i] = <li id={i} key={i} href="#" onClick={this.props.pagination.methods.onClickPagination}
                                style={parseInt(this.props.pagination.pagination.currentPage) === i ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>{i}</li>;
        }
        return listItems;
    }

    render() {
        return (this.getItems());
    }
}

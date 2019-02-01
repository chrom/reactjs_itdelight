import React from 'react';


export default class CardInPage extends React.Component {


    render() {
        return (
            <select onChange={this.props.pagination.methods.onClickLimit} value={this.props.pagination.pagination.itemsOnPage} className="uk-select uk-width-small uk-margin-left">
                <option value="6" >6</option>
                <option value="12" >12</option>
                <option value="24" >24</option>
            </select>
        );
    }
}

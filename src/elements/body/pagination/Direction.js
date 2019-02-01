import React from "react";


export default class Direction extends React.Component {

    render() {
        return (
            <select onChange={this.props.pagination.methods.changeDirection} value={this.props.pagination.order}
                    className="uk-select uk-width-small uk-margin-auto-left">
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
        )
    }
}

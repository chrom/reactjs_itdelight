import React from "react";


export default class Search extends React.Component {

    render() {
        return (
            <form className="search uk-width-medium uk-margin-right">
                {<input className="uk-input" type="search" placeholder="Search..."
                 onChange={this.props.body.methods.handleSearch}/>}
            </form>
        )
    }
}

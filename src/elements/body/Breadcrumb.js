import React from "react";


export default class Breadcrumb extends React.Component {

    render() {
        return (
            <ul className="uk-breadcrumb uk-margin-medium-bottom">
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><span>Active</span></li>
            </ul>
        )
    }
}

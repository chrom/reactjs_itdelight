import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Item extends React.Component {

    render() {
        let listItems = this.props.menu.map(function (item, index) {
            return (
                <li key={index}>
                    <NavLink to={item.href} activeClassName={`uk-active`}>{item.name}</NavLink>
                </li>)
        })
        return listItems;
    }
}

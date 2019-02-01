import React from 'react';
import Item from './menu/Item';



const menu = [
    {name: 'Posts', href: 'list', class: 'uk-active'},
    {name: 'Users', href: 'users', class: ''},
    {name: 'Photos', href: 'photos', class: ''},
    {name: 'Albums', href: 'albums', class: ''},
    {name: 'Todos', href: 'todos', class: ''},
    {name: 'Comments', href: 'comments', class: ''},
];


export default class Menu extends React.Component {
    render() {
        return (
            <ul className="uk-navbar-nav">
                <Item menu={menu}/>
            </ul>);
    }
}

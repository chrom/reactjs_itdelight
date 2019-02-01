import React from 'react';
import Logo from './navigation/Logo';
import Menu from './navigation/Menu';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="uk-navbar-left">
                <Logo/>
                <Menu/>
            </div>);
    }
}

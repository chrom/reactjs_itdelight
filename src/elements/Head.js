import React from 'react';
import Navigation from './head/Navigation';

export default class Head extends React.Component {
    render() {
        return (<nav className="uk-navbar-container uk-margin">
                    <Navigation/>
                </nav>);
    }
}

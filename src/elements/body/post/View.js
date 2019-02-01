import React from 'react';
import {Link} from "react-router-dom";

export default class View extends React.Component {

    render() {

        if(!this.props.item){
            return (<div>We can't find this article!</div>);
        }

        return (
            <div>
                <h1 className="uk-heading-bullet uk-margin-medium-bottom">
                    <span>{this.props.item.post.id}: {this.props.item.post.title}</span>
                    <Link className="uk-text-small" to={`#`}>{this.props.item.user.name}</Link>
                </h1>
                <div className="uk-article uk-dropcap uk-margin-large-bottom">
                    <p>{this.props.item.post.body}</p>
                </div>
            </div>
        );
    }
}

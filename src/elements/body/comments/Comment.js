import React from 'react';
import {Link} from "react-router-dom";

export default class Comment extends React.Component {

    render() {
        return (
            <div>
                <article className="uk-comment">
                    <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove">
                                <Link to={`#`} className="uk-link-reset">{this.props.data.id}: {this.props.data.name}</Link>
                            </h4>
                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <li><Link to={`#`} className="uk-link-reset">{this.props.data.name}</Link></li>
                            </ul>
                        </div>
                    </header>
                    <div className="uk-comment-body">
                        <p>{this.props.data.body}</p>
                    </div>
                </article>
                <hr/>
            </div>

        );
    }
}

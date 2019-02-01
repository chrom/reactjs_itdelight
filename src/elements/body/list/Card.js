import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-media-left uk-cover-container">
                    <img src="https://picsum.photos/600/400" alt=""/>
                </div>
                <div className="uk-card-header">
                    <h2>ID: {this.props.data.id}</h2>
                    <h3 className="uk-card-title">{this.props.data.title}</h3>
                </div>
                <div className="uk-card-body">
                    <p>{this.props.data.body}</p>
                </div>
                <div className="uk-card-footer">
                    <a href={`/view/${this.props.data.id}`} className="uk-button uk-button-text">
                        Read more
                    </a>
                </div>
            </div>
        );
    }
}

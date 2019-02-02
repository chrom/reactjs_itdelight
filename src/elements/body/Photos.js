import React from 'react';

export default class ViewPhotos extends React.Component {

    render() {
        return(
            <div className="uk-inline uk-width-1-1">
                <img src={this.props.data.thumbnailUrl} className="uk-width-1-1" alt=""/>
                <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>{this.props.data.title}</p>
                </div>
            </div>
        );
    }
}

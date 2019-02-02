import React from 'react';


export default class Button extends React.Component {

render() {
    return(
        <ul className="uk-more uk-text-center uk-margin-medium-top">
            <button className="uk-button uk-button-primary" onClick={this.props.button.methods.handleNextPage}>
                Load more
                {/* <div uk-spinner></div> */}
            </button>
        </ul>
    );
}
}

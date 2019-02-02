import React from 'react';
import Comment from './Comment';

export default class CommentsWrapper extends React.Component {

    render() {
        if(!this.props.comments.length){
            return (<div>We can't find comments for this article!</div>);
        }

        return (
            <div>
                <h3 className="uk-margin-remove-top">Comments:</h3>
                <div className="uk-comments">
                    {this.props.comments.map((comment, index) => <Comment key={comment.id} data={comment}/>)}
                </div>
            </div>
        );
    }
}

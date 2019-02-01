import React from 'react';

export default class Form extends React.Component {

    render() {
        console.log(this.props);
        return (
            <form action="#" onSubmit={this.props.form.methods.handleComment} className="uk-comment-form uk-margin-medium-top">
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Add Comment</legend>
                    <input type="hidden" name={`id`} value={this.props.form.post.id}/>
                    <div className="uk-margin">
                        <textarea name={`body`} className="uk-textarea" rows="5" placeholder="Comment" required></textarea>
                    </div>
                    <div className="uk-margin">
                        <input className="uk-input" name={`name`} type="text" placeholder="Name" required/>
                    </div>
                    <div className="uk-margin">
                        <input className="uk-input" name={`email`} type="email" placeholder="Email" required/>
                    </div>
                    <div className="uk-margin">
                        <button name={`body`} className="uk-button uk-button-primary" type="submit">
                            Post Comment
                        </button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

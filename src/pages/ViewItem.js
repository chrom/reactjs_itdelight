import React from 'react';
import View from '../elements/body/post/View';
import Head from '../elements/Head';
import Client from '../api/Client';
import Meta from '../elements/Meta';
import CommentsWrapper from '../elements/body/comments/CommentsWrapper';
import Form from '../elements/body/comments/Form';

export default class ViewList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {
                userId: 1,
                id: 1,
                title: '',
                body: ''
            },
            user: {},
            comments: [],
            methods: {
                handleComment: this.handleComment
            }
        }
    }

    handleComment = (event) => {
        console.log(event.currentTarget);
        // console.log(event.target);
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        Client.createComment({data:data});

        Client.getCommentsByPost({
            id: this.state.post.id
        }).then(response => {
            this.setState({
                post: {...this.state.post},
                user: {...this.state.user},
                comments: response
            })
        });
    }

    componentDidMount() {
        Client.getPost({
            id: this.props.match.params.id
        }).then(response => {
            this.setState({
                post: response,
                user: {...this.state.user},
                comments: [...this.state.comments]
            })
        });

        Client.getUserByPost({
            id: this.state.post.userId
        }).then(response => {
            this.setState({
                post: {...this.state.post},
                user: response,
                comments: [...this.state.comments]
            })
        });

        Client.getCommentsByPost({
            id: this.state.post.id
        }).then(response => {
            this.setState({
                post: {...this.state.post},
                user: {...this.state.user},
                comments: response
            })
        });
    }

    render() {
        return (
            <div>
                <Meta/>
                <Head/>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <ul className="uk-breadcrumb uk-margin-medium-bottom">
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li><span>Active</span></li>
                            </ul>
                            <View item={this.state}/>
                            <hr/>
                            <CommentsWrapper comments={this.state.comments}/>
                            <Form form={this.state}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

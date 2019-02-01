import React from 'react';
import Card from "./list/Card";
import Pagination from "./Pagination";

export default class List extends React.Component {
    render() {

        return (

            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Pagination list={this.props}/>
                        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                            {this.props.body.posts.length ?
                                this.props.body.posts.map((post, index) =>
                                    <div key={post.id}><Card data={post}/></div>)
                                : 'Loading'}
                        </div>
                        <Pagination list={this.props}/>
                    </div>
                </div>
            </main>

        );
    }
}

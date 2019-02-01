import React from 'react';
import View from '../elements/body/post/View';
import Head from '../elements/Head';
import Client from '../api/Client';
import Meta from '../elements/Meta';

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

    render() {
        return (
            <body>
            <Meta/>
            <Head/>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <div className="uk-margin-medium-bottom uk-flex">
                            <form className="uk-width-medium uk-margin-right">
                                <input className="uk-input" type="search" placeholder="Search..."/>
                            </form>
                            <select className="uk-select uk-width-small uk-margin-auto-left">
                                <option value="asc">ASC</option>
                                <option value="desc">DESC</option>
                            </select>
                            <select className="uk-select uk-width-small uk-margin-left">
                                <option value="5">6</option>
                                <option value="10">12</option>
                                <option value="20">24</option>
                            </select>
                            <div className="uk-button-group uk-margin-left">
                                <button className="uk-button uk-button-default">
                                    <span uk-icon="icon:  grid"></span>
                                </button>
                                <button className="uk-button uk-button-default uk-active">
                                    <span uk-icon="icon:  list"></span>
                                </button>
                            </div>
                        </div>
                        <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m">
                            <div>
                                <a href="post.html"
                                   className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                   uk-grid>
                                    <div className="uk-card-media-left uk-cover-container">
                                        <img src="https://picsum.photos/600/400" alt=""/>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Left</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="post.html"
                                   className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                   uk-grid>
                                    <div className="uk-card-media-left-container">
                                        <img src="https://picsum.photos/600/400" alt=""/>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Left</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="post.html"
                                   className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                   uk-grid>
                                    <div className="uk-card-media-left uk-cover-container">
                                        <img src="https://picsum.photos/600/400" alt=""/>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Left</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="post.html"
                                   className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                   uk-grid>
                                    <div className="uk-card-media-left uk-cover-container">
                                        <img src="https://picsum.photos/600/400" alt=""/>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Left</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="post.html"
                                   className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                   uk-grid>
                                    <div className="uk-card-media-left uk-cover-container">
                                        <img src="https://picsum.photos/600/400" alt=""/>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Left</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="post.html"
                                   className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
                                   uk-grid>
                                    <div className="uk-card-media-left uk-cover-container">
                                        <img src="https://picsum.photos/600/400" alt=""/>
                                        <canvas width="600" height="400"></canvas>
                                    </div>
                                    <div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">Media Left</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <ul className="uk-pagination uk-flex-center" uk-margin>
                            <li><a href="#"><span uk-pagination-previous></span></a></li>
                            <li><a href="#">1</a></li>
                            <li className="uk-disabled"><span>...</span></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li className="uk-active"><span>7</span></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#"><span uk-pagination-next></span></a></li>
                        </ul>
                    </div>
                </div>
            </main>
            </body>

    );
    }


    }

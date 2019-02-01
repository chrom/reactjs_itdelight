import React from 'react';
import List from './body/List';
import Client from '../api/Client';
import Search from "./body/Search";
import Head from './Head';

export default class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            search: "",
            pagination: {
                itemsOnPage: 12,
                currentPage: 1,
                order: 'asc',
                total: 100
            }, methods: {
                onClickPagination: this.setPage,
                onClickLimit: this.setLimit,
                changeDirection: this.setDirection,
                handleSearch: this.handleSearch
            }
        }
    }

    componentDidMount() {
        Client.getPosts({
            itemsOnPage: this.state.pagination.itemsOnPage,
            currentPage: this.state.pagination.currentPage,
            order: this.state.pagination.order
        }).then(response => {
            this.setState({
                posts: response.json,
                pagination: {...this.state.pagination, total: response.total}
            })
        });
    }

    setPage = (current) => {
        let id = current.target.id

        Client.getPosts({
            itemsOnPage: this.state.pagination.itemsOnPage,
            currentPage: id,
            order: this.state.pagination.order,
            search: this.state.search
        }).then(response => {
            this.setState({
                ...this.state, pagination: {
                    itemsOnPage: this.state.pagination.itemsOnPage,
                    currentPage: id,
                    total: response.total,
                    order: this.state.pagination.order,
                },
                posts: response.json
            })
        });
    }

    setLimit = (event) => {

        let value = event.target.value;
        let currentPage = 1;
        Client.getPosts({
            itemsOnPage: value,
            currentPage: currentPage,
            order: this.state.pagination.order,
            search: this.state.search
        }).then(response => {
            this.setState({
                ...this.state, pagination: {
                    itemsOnPage: value,
                    currentPage: currentPage,
                    total: response.total,
                    order: this.state.pagination.order,
                },
                posts: response.json
            })
        })
    }

    search = (value) => {
        Client.searchPost({
            itemsOnPage: this.state.pagination.itemsOnPage,
            currentPage: 1,
            order: this.state.pagination.order,
            search: value
        })
            .then((response) => {
                this.setState({
                    ...this.state, pagination: {
                        itemsOnPage: this.state.pagination.itemsOnPage,
                        currentPage: 1,
                        total: response.total,
                        order: this.state.pagination.order,
                    },
                    posts: response.json
                })
            })
    }

    handleSearch = (event) => {
        let value = event.target.value;

        this.setState({
            search: value
        }, () => {
            if (this.state.search && this.state.search.length > 1) {
                if (this.state.search.length >= 3) {
                    this.search(value)
                }
            }
        })
    }

    setDirection = (event) => {

        let value = event.target.value;

        Client.getPosts({
            itemsOnPage: this.state.pagination.itemsOnPage,
            currentPage: this.state.pagination.currentPage,
            order: value,
            search: this.state.search
        }).then(response => {
            this.setState({
                ...this.state, pagination: {
                    itemsOnPage: this.state.pagination.itemsOnPage,
                    currentPage: this.state.pagination.currentPage,
                    total: response.total,
                    order: value,
                },
                posts: response.json
            })
        })
    }


    render() {

        return (
            <div>

                <Head/>
                <div className="main-container">
                    <div className="">
                        <Search body={this.state}/>
                    </div>
                    <List body={this.state}/>
                </div>
            </div>);
    }
}

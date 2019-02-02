import React from 'react';
import Photos from '../elements/body/Photos';
import Head from '../elements/Head';
import Client from '../api/Client';
import Meta from '../elements/Meta';
import Search from '../elements/body/Search';
import AlbumSelector from '../elements/body/album/AlbumSelector';
import Button from '../elements/body/album/Button';

const DEFAULT_ITEMS_IN_PAGE = 6;
export default class ViewPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            search: '',
            pagination: {
                itemsOnPage: DEFAULT_ITEMS_IN_PAGE,
                currentPage: 1,
                order: 'asc',
                total: 100
            },
            albumId: 'all',
            albums: [],
            methods: {
                handleSearch: this.handleSearch,
                handleNextPage: this.handleNextPage,
                handleSelect: this.handleSelect
            }
        }
    }

    handleSearch = (event) => {
        let value = event.target.value;

        this.setState({
            search: value
        }, () => {
            if (this.state.search && this.state.search.length >= 3) {
                this.updatePhotos();
            }
        })
    }

    handleNextPage = () => {
        this.setState({
            pagination: {
                ...this.state.pagination,
                itemsOnPage: this.state.pagination.itemsOnPage + DEFAULT_ITEMS_IN_PAGE
            }
        });
    }

    handleSelect = (event) => {
        let value = event.target.value;
        this.setState({...this.state, albumId: value});
    }

    componentDidMount() {
        this.updatePhotos();
        this.updateAlbums();
    }

    updateAlbums() {
        this.getAlbums().then(response => {
            this.setState({
                pagination: {...this.state.pagination, total: response.headers.total},
                albums: response.json
            })
        })
    }

    updatePhotos() {
        this.getPhotos().then(response => {
            this.setState({
                photos: response.json,
                pagination: {...this.state.pagination, total: response.headers.total}
            })
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.albumId !== prevState.albumId ||
            this.state.pagination.itemsOnPage !== prevState.pagination.itemsOnPage
        ) {
            this.updatePhotos();
        }

    }


    getPhotos = () => {
        return Client.getData('/photos', {
            'params': {
                _limit: this.state.pagination.itemsOnPage,
                _order: this.state.pagination.order,
                albumId: this.state.albumId === 'all' ? '' : this.state.albumId,
                q: this.state.search ? this.state.search : ''
            }
        });
    }

    getAlbums = () => {
        return Client.getData('/albums');
    }

    render() {
        return (
            <div>
                <Meta/>
                <Head/>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <div className="uk-margin-medium-bottom uk-flex">
                                <Search body={this.state}/>
                                <AlbumSelector albums={this.state}/>
                            </div>
                            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
                                 data-uk-grid="masonry: true">
                                {this.state.photos.length ?
                                    this.state.photos.map((post, index) =>
                                        <div key={post.id}><Photos data={post}/></div>)
                                    : 'Loading'}
                            </div>
                            <Button button={this.state}/>
                        </div>
                    </div>
                </main>
            </div>

        );
    }


}

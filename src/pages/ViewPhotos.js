import React from 'react';
import Photos from '../elements/body/Photos';
import Head from '../elements/Head';
import Client from '../api/Client';
import Meta from '../elements/Meta';
import Search from '../elements/body/Search';
import AlbumSelector from '../elements/body/album/AlbumSelector';


export default class ViewPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            pagination: {
                itemsOnPage: 6,
                currentPage: 1,
                order: 'asc',
                albumId: 'all',
                total: 100
            },
            albums: [],
            methods: {
                handleSearch: this.handleSearch,
                handleSelect: this.handleSelect
            }
        }
    }

    handleSearch = () => {

    }

    handleSelect = (event) => {
        let value = event.target.value;
        console.log(value);
        this.setState({...this.pagination, albumId: value})
    }

    componentDidMount() {
        this.getPhotos().then(response => {

            this.setState({
                photos: response.json,
                pagination: {...this.state.pagination, total: response.headers.total},
                albums: {...this.state.albums}
            })
        });
        this.getAlbums().then(response => {
            this.setState({
                pagination: {...this.state.pagination, total: response.headers.total},
                albums: response.json
            })
        })

    }

    getPhotos = () => {
        let extendParams = {};

        return Client.getData('/photos', {
            'params': {
                _limit: this.state.pagination.itemsOnPage,
                _page: this.state.pagination.currentPage,
                _order: this.state.pagination.order
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
                                <AlbumSelector albums={this.state} />
                            </div>
                            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
                                 data-uk-grid="masonry: true">
                                {this.state.photos.length ?
                                    this.state.photos.map((post, index) =>
                                        <div key={post.id}><Photos data={post}/></div>)
                                    : 'Loading'}
                            </div>
                            <ul className="uk-more uk-text-center uk-margin-medium-top">
                                <button className="uk-button uk-button-primary">
                                    Load more
                                    {/* <div uk-spinner></div> */}
                                </button>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>

        );
    }


}

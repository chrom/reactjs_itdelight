import React from 'react';


export default class ViewPhotos extends React.Component {
    render() {
        return (
            <select className="uk-select uk-width-small uk-margin-left" onChange={this.props.albums.methods.handleSelect}>
                <option value="all">All</option>
                {this.props.albums.albums.length > 0 ?
                    this.props.albums.albums.map((albums, index) =>
                        <option key={albums.id} value={albums.id}>{albums.id}: {albums.title}</option>):''
                }
            </select>
        )
    }

}

import React, {Component} from 'react';
import Media from './media.js'
import './playlist.css'

class Playlist extends Component {
    render() {
        //const playlist = this.props.data.categories[0].playlist
        const {id, description, title,playlist} = this.props.itemData
        console.log(description)
        console.log(title)
        console.log(playlist)
        return (
            <div className="Playlist">
                <h3 className="Playlist-title">{title}</h3>
                <h1 className="Playlist-description">{description}</h1>
                <div className="playlist-scroll">
                    {
                        playlist.map((item) => {
                            return <Media key={item.id} {...item}/>///Spread operator
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Playlist
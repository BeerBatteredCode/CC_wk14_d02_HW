import React, {Component} from 'react';
import MusicChart from '../components/MusicChart';

class MusicContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            music: [],
            selectedSong: null
        };
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then((music) => {
            this.setState({music: music.feed.entry});
        });
    }

    render(){
        return(
            <div className="music-container">
                <h3>Music Library</h3>
                    <MusicChart
                    music={ this.state.music }
                    />
            </div>
        )
    }
}

export default MusicContainer;
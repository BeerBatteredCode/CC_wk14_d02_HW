import React, {Container} from 'react';
import MusicSelector from '../components/MusicSelector';

class MusicContainer extends Container {
    constructor(props){
        super(props);
        this.state = {
            music = [],
            selectedSong = null
        };
        this.selectedSong = this.selectedSong.bind(this);
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then((music) => {
            this.setState({music: music});
        });
    }

    render(){
        return(
            <div className="music-container">
                <h3>Music Library</h3>
                <MusicSelector
                    music={ this.state.music }
                    onMusicSelected={ this.state.selectedSong }/>
                <MusicDetail
                    music={ this.state.selectedSong }/>
            </div>
        )
    }
}

export default MusicContainer;
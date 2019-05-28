import React from 'react';

const MusicChart = ({music}) => {

    const musicList = music.map((music, index) => {
        return (
            <li key={index}>
                <h3>{music["im:name"].label}</h3>
                <h4>{music["im:artist"].label}</h4>
            </li>
        )
    })

    return(
        <div className="musicChart">
            <ol>{musicList}</ol>
        </div>
    )
}

export default MusicChart;
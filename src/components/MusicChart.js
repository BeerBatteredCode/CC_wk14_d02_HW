import React from 'react';

const MusicChart = ({music}) => {

    const musicList = music.map((music, index) => {
        return (
            <ol key={index}>
                <h3>{music["im:name"].label}</h3>
            </ol>
        )
    })

    return(
        <div className="musicChart">
            <li>{musicList}</li>
        </div>
    )
}

export default MusicChart;
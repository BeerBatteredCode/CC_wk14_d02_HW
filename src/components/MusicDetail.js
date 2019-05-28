import React from 'react';

const MusicDetail = ({song}) => {
    if (song === null){
        return(
            <p>You must select a song</p>
        );
    }

    return(
        <>
        <h3>Name: {song.label}</h3>
        </>
    )
}
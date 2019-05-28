import React from 'react';

const MusicSelector = (props) => {
    const options = props.music.map((song, index) => {
        return (<option value={index} key={index}>{song.name}</option>);
    });

    function handleSelectChange(evt) {
        const selectedIndex = evt.target.value;
        props.onSongSelected(selectedIndex);
    }

    return(
        <select
        onChange={ handleSelectChange }
        >
            <option disabledvalue="default">Please Select a Song</option>
            {option}
        </select>
    )
}

export default MusicSelector;
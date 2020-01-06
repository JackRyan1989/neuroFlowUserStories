import React from 'react';
//Import React Audio Player
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({ src }) => {
    return (   
            <ReactAudioPlayer
                style={{ display: 'block', width: "14rem" }}
                src={src}
                controls
            /> 
    )
}

//Export the module so we can use it elsewhere (e.g. in AudioCard.js):
export default AudioPlayer;

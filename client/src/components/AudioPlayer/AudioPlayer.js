import React from 'react';
// Import React Audio Player
import ReactAudioPlayer from 'react-audio-player';

// Send in the audio file source to a new Audio player taken from React Audio Player
// To Do: Deconstruct this element using the HTML audio tag so we can send out a message to users if the audio is unplayable.
const AudioPlayer = ({ src }) => {
    return (
        <ReactAudioPlayer
            style={{ display: 'block', width: "14rem" }}
            src={src}
            controls
        />
    )
}

// Export the module so we can use it elsewhere (e.g. in AudioCard.js):
export default AudioPlayer;

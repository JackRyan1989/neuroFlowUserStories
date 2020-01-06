import React from 'react';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
//Custom components:
import AudioCard from '../AudioCard/AudioCard';
//Import custom css:
import './SoundBoard.css';

// The SoundBoard component will load the audio files from the .json file located in /assets. 
// It will then loop through the files, and display each separately. 
// The data from the json file will be loaded into this.state.data
// A notification that the data is loading will be made visible to the user until this.state.loading is set to false.
// The error message is currently blank, but will be set by a try/catch function if something goes wrong.
const SoundBoard = ({error, loading, data}) => {
    //Render the page with the current state:    
    return (
        //Actual content to render in DOM:    
            <Container>
                {/* Short circuit operator: If we are loading data or an error has occurred while loading the data, display the appropriate message. */}
                {/* Currently, I am displaying the exact error message. This should be changed post development to a more friendly message complete with contact info. */}
                {(loading || error) && <div className="alert">{loading ? "Loading your audio..." : error}</div>}
                {/* Loop over the data array that we created above and load the data as props into a custom card component */}
                {data.map(audioFile =>
                    <AudioCard key={audioFile.id} audioFile={audioFile} />
                )}
            </Container>
    );
}


//Export the module so we can use it elsewhere (e.g. in App.js):
export default SoundBoard;





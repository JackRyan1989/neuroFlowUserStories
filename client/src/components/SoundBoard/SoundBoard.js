import React from 'react';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
//Custom components:
import AudioCard from '../AudioCard/AudioCard';

const SoundBoard = ({error, loading, filteredData}) => {
    //Render the page with the current state:    
    return (   
            <Container>
                {/* Short circuit operator: If we are loading data or an error has occurred while loading the data, display the appropriate message. */}
                {/* Currently, I am displaying the exact error message. This should be changed post development to a more friendly message complete with contact info. */}
                {(loading || error) && <div className="alert">{loading ? "Loading your audio..." : error}</div>}
                {/* Loop over the data array that we created above and load the data as props into a custom card component */}
                {filteredData.map(audioFile =>
                    <AudioCard key={audioFile.id} audioFile={audioFile} />
                )}
            </Container>
    );
}


//Export the module so we can use it elsewhere (e.g. in App.js):
export default SoundBoard;





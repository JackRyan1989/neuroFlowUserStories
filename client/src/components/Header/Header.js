import React from 'react';
// Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

// This is a simple jumbotron for displaying the title and subtitle:
const Header = () => {
    return(
        <Container>
            <Jumbotron className='w-100 text-white rounded-0' style={{'background-color': '#365577'}}>
                <h1 className='mx-4 mb-4'>Meditation Guides</h1>
                <h3 className='mx-4 pt-2'>Clear your mind and calm your body with these meditation and mindfulness resources</h3>
            </Jumbotron>
        </Container>
    )
}

// Export the module so we can use it elsewhere (e.g. in App.js):
export default Header;
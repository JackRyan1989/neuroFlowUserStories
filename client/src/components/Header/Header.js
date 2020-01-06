import React from 'react';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
    return(
        <Container>
            <Jumbotron>
                <h1 className='mx-4 mb-4'>Meditation Guides</h1>
                <h3 className='mx-4 pt-2'>Clear your mind and calm your body with these Meditation and Mindfulness resources</h3>
            </Jumbotron>
        </Container>
    )
}

//Export the module so we can use it elsewhere (e.g. in App.js):
export default Header;
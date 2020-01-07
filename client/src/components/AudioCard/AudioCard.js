import React, { useState } from 'react';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
//Custom components:
import AudioPlayer from '../AudioPlayer/AudioPlayer';

// This is a stateless component that receives all it's info from SoundBoard.js
// Each card is styled using react-bootstrap components.
// The data about each file is pulled from the audioFile object.
let count = 0;
const AudioCard = ({ audioFile }) => {

    //Use the useState hook to toggle the full descrition:
    const [toggled, setToggle] = useState(false);
    const displayDesc = () => {
        count = count+1;
        setToggle(true);
        if (count % 2 === 0) {
            setToggle(false);
        }
    }

    //We render to the DOM what is in the return statement: 
    return (
        <Container sm={8}>
            <Row>
            <Card className='h-100 w-100 p-2 mx-2 mb-2 float-left rounded-0'>
                <Card.Body>
                    <Card.Title>
                        {audioFile.label}
                        <span>
                            <Badge className='mx-2 mb-3' variant='info'>{audioFile.category} </Badge>
                            |
                            <Badge className='mx-2 mb-3' variant='success'> {audioFile.speaker} </Badge>
                        </span>
                    </Card.Title>
                    <Card.Subtitle className='mx-auto'>
                        <Button onClick={displayDesc} className='m-2 px-3' size="sm">
                            {toggled ? "Close" : "Full Description"}
                        </Button>
                        <Card.Text id={toggled ? "open" : "hid"} style={{display: toggled ? 'block' : 'none'}}>{audioFile.description}</Card.Text>
                        </Card.Subtitle>
                    <AudioPlayer className="mx-auto" src={audioFile.url} />
                </Card.Body>
            </Card>
            </Row>
        </Container>
    )
}

//Export the module so we can use it elsewhere (e.g. in SoundBoard.js):
export default AudioCard;

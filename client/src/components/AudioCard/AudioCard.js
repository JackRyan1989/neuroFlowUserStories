import React, { useState } from 'react';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
//Custom components:
import AudioPlayer from '../AudioPlayer/AudioPlayer';
//Import external css file:
import './AudioCard.css';


// This is a stateless component that receives all it's info from SoundBoard.js
// Each card is styled using react-bootstrap components.
// The data about each file is pulled from the audioFile object.
let count = 0;
const AudioCard = ({ audioFile }) => {

    //Use the useState hook to toggle the full descrition:
    const [toggled, setToggle] = useState(false);
    const displayDesc = () => {
        count = count+1;
        console.log(count);
        setToggle(true);
        if (count % 2 === 0) {
            setToggle(false);
        }
    }

    //We render to the DOM what is in the return statement: 
    return (
        <Container sm={12}>
            <Card className='h-100 p-2 mx-2 mb-2 card float-left' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-center'>
                        {audioFile.label}
                    </Card.Title>
                    <Card.Subtitle>
                        <span>
                            <Badge className='mx-2 mb-3' variant='info'>{audioFile.category} </Badge>
                            |
                            <Badge className='mx-2 mb-3' variant='success'> {audioFile.speaker} </Badge>
                        </span>
                    </Card.Subtitle>
                    <Card.Text>
                        <Button onClick={displayDesc} className='mx-2 px-3' size="sm">
                            {toggled ? "Close" : "Full Description"}
                        </Button>
                        <Card.Text id={toggled ? "open" : "hid"} style={{display: toggled ? 'block' : 'none'}}>{audioFile.description}</Card.Text>
                    </Card.Text>
                    <AudioPlayer src={audioFile.url} />
                </Card.Body>
            </Card>
        </Container>
    )
}

//Export the module so we can use it elsewhere (e.g. in SoundBoard.js):
export default AudioCard;

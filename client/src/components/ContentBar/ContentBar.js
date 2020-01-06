import React, { Component } from 'react';
//Import react-bootstrap components:
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SoundBoard from '../SoundBoard/SoundBoard';
//Import custom CSS:
import './ContentBar.css';


class ContentBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: '',
        }
    }

    //Run an asynchronous function to get the data from the assets/audio_files.json file when this component mounts (on page load).
    async componentDidMount() {
        //Embed the fetch function in a try/catch function:
        try {
            //Data means the audio files, they are being passed in as a property from App.js
            const data = await fetch(this.props.dataSource);
            //Parse the data const and set the result to a new const:
            const dataJSON = await data.json();
            //If we get data back, put it in the state for later use, and set loading to false:
            if (dataJSON) {
                this.setState({
                    data: dataJSON,
                    loading: false,
                });
            }
            //If something goes wrong, still set loading to false and plop in the error message to state so we can display it.
        } catch (error) {
            this.setState({
                loading: false,
                error: error.message,
            })
        }
    }

    //Create a bar that allows users to select what data they want to see:
    render() {
        const { data, loading, error } = this.state;
        let arr = [];
        data.forEach(elem => arr.push(elem.category));
        const category = [...new Set(arr)];
        let arr2 = [];
        data.forEach(elem => arr2.push(elem.speaker));
        const speaker = [...new Set(arr2)];
        return (
            <Container>
                <Row>
                    <Col className='sideBar border h-100' lg={4} sm={2}>
                        <Accordion>
                            <h3 className='p-2'>Sort content</h3>
                            <Accordion.Toggle className="mx-4 px-3" as={Button} variant="link" eventKey="0">
                                <h4>Category</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <>{category.map(elem =>
                                    <p className="mx-4 px-3">{elem}</p>
                                )}
                                </>
                            </Accordion.Collapse>
                            <Accordion.Toggle className="mx-4 px-3" as={Button} variant="link" eventKey="2">
                                <h4>Speaker</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <>{speaker.map(elem =>
                                    <p className="mx-4 px-3">{elem}</p>
                                )}
                                </>
                            </Accordion.Collapse>
                        </Accordion>
                    </Col>
                <Col lg={8} sm={10}>
                    <SoundBoard loading={loading} error={error} data={data}/>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default ContentBar;

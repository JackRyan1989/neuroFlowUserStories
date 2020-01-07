import React, { Component } from 'react';
//Import react-bootstrap components:
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SoundBoard from '../SoundBoard/SoundBoard';

// The ContentBar component will load the audio files from the .json file located in /assets. 
// It will then loop through the files, and display each separately. 
// The data from the json file will be loaded into this.state.data
// A notification that the data is loading will be made visible to the user until this.state.loading is set to false.
// The error message is currently blank, but will be set by a try/catch function if something goes wrong.
class ContentBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filteredData: [],
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
                    filteredData: dataJSON,
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

    //Sorted the data based on what button the user clicks. 
    handleDataSort = (type) => {
        if (type === 'all') {
            this.setState({
                filteredData: this.state.data,
            })
        } else if ((type === 'Breathing') || (type === 'Meditation') || (type === 'Relaxation')) {
            let filtered = this.state.data.filter(elem => this.state.data[this.state.data.indexOf(elem)].category === type);
            this.setState({
                filteredData: filtered,
            })
        } else {
            let filtered = this.state.data.filter(elem => this.state.data[this.state.data.indexOf(elem)].label === type);
            this.setState({
                filteredData: filtered,
            })
        }
    }

    //Create a bar that allows users to select what data they want to see:
    render() {
        const { data, filteredData, loading, error } = this.state;
        let arr = [];
        data.forEach(elem => arr.push(elem.category));
        const category = [...new Set(arr)];
        let arr2 = [];
        data.forEach(elem => arr2.push(elem.label));
        const duration = [...new Set(arr2)];
        return (
            <Container>
                <Row>
                    <Col className='border h-100 sticky-top' lg={4} sm={2} style={{'background-color': 'white'}}>
                        {/* This whole accordion should be refactored into a separate component */}
                        <Accordion>
                            <h3 className='p-2'>Sort content</h3>
                            <Accordion.Toggle className="mx-4 px-3" as={Button} variant="link" eventKey="0">
                                <h5>Type of Practice</h5>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <>{category.map(elem =>
                                    <Row className="m-2 px-3">
                                        <Button onClick={() => this.handleDataSort(elem)} variant='outline-dark' size='sm' className="mx-4 px-3">{elem}</Button>
                                    </Row>
                                )}
                                </>
                            </Accordion.Collapse>
                            <Accordion.Collapse eventKey="0">
                                <Row className="m-2 px-3">
                                    <Button onClick={() => this.handleDataSort('all')} variant='outline-dark' size='sm' className="mx-4 px-3">All</Button>
                                </Row>
                            </Accordion.Collapse>
                            <Accordion.Toggle className="mx-4 px-3" as={Button} variant="link" eventKey="1">
                                <h5>Practice Title</h5>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <>{duration.map(elem =>
                                    <Row className="m-2 px-3">
                                        <Button onClick={() => this.handleDataSort(elem)} variant='outline-dark' size='sm' className="mx-4 px-3">{elem}</Button>
                                    </Row>
                                )}
                                </>
                                </Accordion.Collapse>
                                <Accordion.Collapse eventKey="1">
                                <Row className="m-2 px-3">
                                    <Button onClick={() => this.handleDataSort('all')} variant='outline-dark' size='sm' className="mx-4 px-3">All</Button>
                                </Row>
                            </Accordion.Collapse>
                        </Accordion>
                    </Col>
                    <Col lg={8} sm={10}>
                        <SoundBoard loading={loading} error={error} filteredData={filteredData} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContentBar;

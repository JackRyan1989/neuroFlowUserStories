import React from 'react';
import './App.css';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
//Import custom components:
import Header from './components/Header/Header';
import ContentBar from './components/ContentBar/ContentBar';

function App() {
  return (
    <Container className='main'>
      <Header />
      <ContentBar dataSource={'../../assets/audio_files.json'}/>
    </Container>
  );
}

export default App;

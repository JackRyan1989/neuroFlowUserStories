import React from 'react';
//Import react-bootstrap components:
import Container from 'react-bootstrap/Container';
//Import custom components:
import Header from './components/Header/Header';
import ContentBar from './components/ContentBar/ContentBar';

function App() {
  return (
    <Container fluid style={{'backgroundColor': '#c3cde6'}}>
      <Header />
      {/* dataSource must remain in the public directory */}
      <ContentBar dataSource={'../../assets/audio_files.json'}/>
    </Container>
  );
}

export default App;

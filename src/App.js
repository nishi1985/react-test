import React from 'react';
import NavBar from './Components/NavBar'
import CarouselHome from './Components/CarouselHome';
import CardsProducts from './Components/CardsProducts';

import {Container, Row} from 'react-bootstrap';

function App() {
  return (
    <>
      <NavBar/>
      <CarouselHome/>
      <br></br>
      
      <Container>
        <Row>
          <CardsProducts/>
        </Row>
      </Container>
      

    </>
  );
}

export default App;

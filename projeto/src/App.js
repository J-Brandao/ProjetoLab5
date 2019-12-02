import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/Navbar";
import Left_side from "./Components/Left_side";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div>
        <NavBar/>
        <Container >
        <Row>
            <Col ><Left_side/></Col>

            <Col><span>Aqui fica a lista</span></Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;

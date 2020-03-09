import React from 'react';
//import Nav from "./components/Navigation/Nav.jsx"
//import Footer from "./components/Footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import './img/america-architecture-bay-boat-208745.jpg'
import CSSImg from './img/css.png'
import HTMLImg from './img/html.png'
import JSImg from './img/javascript.png'
import NODEImg from './img/node.png'
import REACTImg from './img/react.png'
import './App.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
function App() {
  return (

    
    <Container>
      {/* Header Row */}
      <Row>
        <Col className = "header">
          
          <Row>
      <Col sm={12}>
      <Button bsstyle="primary">Home</Button>
      <Button bsstyle="primary">About Me</Button>
      </Col>
      
      </Row>
        </Col>
      </Row>


    {/* Main Content*/}
      <Row>
        <Col id = "bioContent">
          <div id="bioTextContainer">
            <p>Hello, My Name is Jonathyn and I am originally from the Bay Area.</p>
          </div>
        </Col>
      </Row>
      
      <Row>
        <Col id = "skillContent">
          <div id = "skillContentContainer">
          <div className = "skillContainer" id="skillHTMLContainer">
          <img src={HTMLImg} alt="HTML LOGO"></img>
          
          </div>
          <div className = "skillContainer" id="skillJSContainer">
          <img src={JSImg} alt="JS LOGO"></img>
          </div>
          <div className = "skillContainer" id="skillCSSContainer">
          <img src={CSSImg} alt="CSS LOGO"></img>
          </div>
          <div className = "skillContainer" id="skillNodeContainer">
          <img src={NODEImg} alt="NODE LOGO"></img>
          </div>
          <div className = "skillContainer" id="skillReactContainer">
          <img src={REACTImg} alt="REACT LOGO"></img>
          </div>
          </div>
        </Col>
      </Row>




      <Row>
        <Col className = "footer">
          {/* footer */}
          <Row className ="footer">
      <Col sm={12}>
        <div id = "socialMediaIcons">
      <i className="fab fa-2x fa-github"></i>
      <i className="fab fa-2x fa-linkedin"></i>
      <i className="fab fa-2x fa-facebook-f"></i>
      <i className="fab fa-2x fa-instagram"></i>
      </div>
      
      </Col>
      
      </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

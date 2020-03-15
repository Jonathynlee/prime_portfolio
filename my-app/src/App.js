import React from 'react';
//import Nav from "./components/Navigation/Nav.jsx"
//import Footer from "./components/Footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import './img/america-architecture-bay-boat-208745.jpg'
import CSSImg from './img/css.png';
import HTMLImg from './img/html.png';
import JSImg from './img/javascript.png';
import NODEImg from './img/node.png';
import REACTImg from './img/react.png';
import images from"./projectData";
import WORKOUTTracker from './img/workoutTracker.png';
import projectArr from './projectData.js'
import './App.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SkillTile from "./components/SkillTile/skillTile";
import ProjectTile from "./components/ProjectTile/projectTile";
import TopButton from "./components/TopButton/topButton";


function App() {
  console.log(projectArr)
  return (

    
    <Container>
      {/* Header Row */}
      <Row>
        <div class = "header">
      <TopButton text = "HOME"></TopButton>
      <TopButton text = "ABOUT ME"></TopButton>
      </div>
      </Row>

    {/* Main Content*/}
      <Row>
        <Col id = "bioContent">
          <div id="bioTextContainer">
            <p>Hello, My Name is Jonathyn and I am originally from the Bay Area.</p>
          </div>
        </Col>
      </Row>
      {/* Skill Tiles*/}
      <Row>
        <Col id = "skillContent">
          <div id = "skillContentContainer">
          <SkillTile image={HTMLImg} skillID = "skillHTMLContainer" alt = "HTML LOGO"/>
          <SkillTile skillID ="skillJSContainer" image={JSImg} alt="JS LOGO"/>
          
          <SkillTile className = "skillContainer" skillID="skillCSSContainer" image ={CSSImg} alt="CSS LOGO"/>
          
          <SkillTile className = "skillContainer" skillID="skillNodeContainer" image ={NODEImg} alt="NODE LOGO"/>
          
          <SkillTile className = "skillContainer" skillID="skillReactContainer" image ={REACTImg} alt="REACT LOGO"/>
          
          </div>
        </Col>
      </Row>


      {/* Projects*/}
      <Row>
        <Col id = "projectContent">
        {images.map(({image, alt, link, divID})=>{
          
          return(<ProjectTile image ={image} alt={alt} link={link} divID={divID}/>)
        })}
        
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

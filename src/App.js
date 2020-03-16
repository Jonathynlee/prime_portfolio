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
import profileImg from './img/jm_picture.jpg'
import hikingImg from './img/jm_hiking.jpg'
import snowBoardImg from './img/jm_snowboard.png'

import images from"./projectData";
import projectArr from './projectData.js'
import './App.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SkillTile from "./components/SkillTile/skillTile";
import ProjectTile from "./components/ProjectTile/projectTile";
import TopButton from "./components/TopButton/topButton";
import TileImage from "./components/TileImage/tileImage"

function App() {
  console.log(projectArr)
  return (

    
    <Container>
      {/* Header Row */}
      <Row>
        <div className = "header">
      <TopButton text = "HOME"></TopButton>
      <TopButton text = "ABOUT ME"></TopButton>
      </div>
      </Row>

    {/* Main Content*/}
      <Row>

      
      <Col md="3" class = "bioContent-left">
          <div class="bioTextContainer-left">
            <TileImage image = {profileImg}></TileImage>
            </div>
            </Col>
            <Col md="3" class = "bioContent-left">
          <div class="bioTextContainer-left">
            <TileImage image = {hikingImg}></TileImage>
            </div>
            </Col>
            <Col md="3" class = "bioContent-left">
              
          <div class="bioTextContainer-left">
            <TileImage image = {snowBoardImg}></TileImage>
            
          </div>
        </Col>
        <Col md="3" id = "bioContent">
          <div id="bioTextContainer">
          <p>Hello, My Name is Jonathyn and I graduated with my BS in Mechanical Engineering in May, 2017. There is much to my story but I will leave that for the 'About Me' tab. <br>
          </br><br></br>
          I recently began to love programming and I am now soon to be certified as a full stack developer for Web Development.</p>
          
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
        {images.map(({id, image, alt, link, divID, github})=>{
          
          return(<ProjectTile key = {id} github = {github} image ={image} alt={alt} link={link} divID={divID}/>)
        })}
        
        </Col>
      </Row>




      <Row>
        <Col className = "footer">
          {/* footer */}
          <Row className ="footer">
      <Col sm={12}>
        <div id = "socialMediaIcons">
      <a href="https://github.com/Jonathynlee"><i className="fab fa-2x fa-github"></i></a>
      <a href="https://www.linkedin.com/in/jonathyn-major-84445a7b/"><i className="fab fa-2x fa-linkedin"></i></a>
      <a href="https://www.facebook.com/Uphoricness"><i className="fab fa-2x fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/jonathynleemajor/"><i className="fab fa-2x fa-instagram"></i></a>
      </div>
      
      </Col>
      
      </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React, {Component} from 'react';
import "./skillTile.scss";
export default class SkillTile extends Component{

render(){
return(
<div className = "skillContainer" id={this.props.skillID}>
          <img src={this.props.image} alt={this.props.alt}></img>
          
          </div>

)
}
}
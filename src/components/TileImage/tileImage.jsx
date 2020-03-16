import React, {Component} from 'react';
import "./tileImage.scss";
export default class TileImage extends Component{

render(){
return(
<div className = "tileImageContainer">
          <img src={this.props.image} alt={this.props.alt}></img>
          
          </div>

)
}
}
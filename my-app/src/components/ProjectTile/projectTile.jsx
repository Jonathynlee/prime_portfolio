import React, {Component} from 'react';
import "./projectTile.scss";

export default class ProjectTile extends Component{
   
    constructor(props){
        super(props);
        
    }


  
    render(){

        return(
            <div className = "projectImageTile " id ={this.props.divID}>
                <img src={this.props.image}></img>
                <div className = "overlay">
                    <button className = "linkButton liveButton" onClick={() => {window.open(this.props.link, '_blank')}}>Live Site</button>
                    <button className = "linkButton githubButton" onClick={() => {window.open(this.props.github, '_blank')}}>Github Repo</button>
                </div>
            </div>


        );
    }
}

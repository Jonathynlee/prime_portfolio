import React, {Component} from 'react';
import "./projectTile.scss";

export default class ProjectTile extends Component{

    render(){

        return(
            <div className = "projectImageTile " id ={this.props.divID}>
                <a href = {this.props.link}><img src={this.props.image}></img></a>

            </div>


        );
    }
}
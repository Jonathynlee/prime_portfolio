import React, {Component} from 'react';
import "./topButton.scss";

export default class TopButton extends Component{

    render(){

        return(
            <div className = "topButton">
                <h1>{this.props.text}</h1>
                
            </div>


        );
    }
}
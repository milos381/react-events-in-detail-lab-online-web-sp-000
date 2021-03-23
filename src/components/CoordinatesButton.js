import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  
  createButton = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render() {
      
    return (
      <div>
            <button onClick={this.createButton}>
                Click me!
            </button>
      </div>
    )
  }
  
}
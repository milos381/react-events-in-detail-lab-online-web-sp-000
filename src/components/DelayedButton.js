import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
  someFunction = (event) => {
    event.persist();
    const fx = () => this.props.onDelayedClick(event)
    setTimeout( fx, this.props.delay )
  }
  render() {
      
    return (
      <div>
            <button onClick={this.someFunction}>
                Click me number two!
            </button>
      </div>
    )
  }
  
}
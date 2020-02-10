import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';



class App extends Component { 
  constructor(){
    super()
    this.state = {
      time: new Date()
    }    
  }
  tick = () => {
    this.setState({
      time: new Date()
    });
  }
  componentDidMount() {    
    setInterval(this.tick, 1000);
  }
  render() {
    return (
      <div>
      <h2>{ this.props.title }</h2>
        <h3>
          The Current Time is: { this.state.time.toLocaleTimeString()}
        </h3>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

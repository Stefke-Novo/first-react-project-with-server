import React from 'react';
import './Onama.css';

const { Component, Children, PropTypes } = React

class SplitText extends Component {
  render(){
    return(
      <span aria-label={this.props.copy} role={this.props.role} >
          {this.props.copy.split("").map(function(char, index){
            let style = {"animation-delay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
    );
  }
}

class Layout extends Component {
  render() {
    return(
      <h1><SplitText copy={this.props.naslov} role="heading" /></h1>
    );
  }
}

export default Layout;

import React, { Component } from 'react';
import './datum.css';

   

class Datum extends Component {

  constructor() {
    super();
    var today = new Date(),
    date =  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    this.state = {
      currentDate: date
    }
  }
  render() {
    return (
      <div className="DatumPasus">
          { this.state.currentDate }
      </div>
    );
  }
}
export default Datum;
import React, { Component } from 'react';  

class Vreme extends Component {
  constructor() {
    super();
    var today = new Date(),
    date = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
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
export default Vreme;
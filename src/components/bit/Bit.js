import React, { Component } from 'react'
import './Bit.css'

class Bit extends Component {
  render() {
    let bit = this.props.bit

    return (
      <div className="bit">
        {bit}
      </div>
    );
  }
}

export default Bit

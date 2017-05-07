import React, { Component } from 'react'
import './Column.css'
import Bit from '../bit/Bit.js'

class Column extends Component {
  render() {
    let binary = this.props.binary

    let bits = [];
    for (let i = 0; i < 4; i++) {
      bits.push(<Bit key={i} bit={binary[i]}></Bit>)
    }

    return (
      <div className="column">
        {bits}
      </div>
    );
  }
}

export default Column

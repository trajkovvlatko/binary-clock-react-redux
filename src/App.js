import React, { Component } from 'react'
import { connect } from 'react-redux'

import Column from './components/column/Column.js'
import Digital from './components/digital/Digital.js'

import './App.css';

class App extends Component {
  render() {

    let { digital, binary } = this.props

    let columns = []
    for (let i = 0; i < 6; i++) {
      columns.push(<Column key={i} binary={binary[i]}></Column>)
    }

    return (
      <div className="app">
        <div className="digital">
          <Digital value={digital}></Digital>
        </div>
        <div className="binary">
          {columns}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)

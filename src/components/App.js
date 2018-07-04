import React, { Component } from 'react'

import { ButtonPanel } from './ButtonPanel/ButtonPanel'
import { Display } from './Display/Display'

import calculate from '../utils/calculate'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }

  buttonPanelClickHandler = (buttonText) => {
    this.setState(calculate(this.state, buttonText))
  }

  render () {
    const {total, next} = this.state

    return (
      <div className="calculator">
        <Display value={next || total || "0"} />
        <ButtonPanel panelButtonClickHandler={this.buttonPanelClickHandler} />
      </div>
    )
  }
}

export default App

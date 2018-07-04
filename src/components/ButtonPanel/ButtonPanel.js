import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../Button/Button'

import './ButtonPanel.css'

export class ButtonPanel extends Component {
  static propTypes = {
    panelButtonClickHandler: PropTypes.func
  }

  buttonClickHandler = (buttonText) => {
    this.props.panelButtonClickHandler(buttonText)
  }

  _createButtonPanel = (buttons) => {
    let buttonPanel = []

    buttons.forEach((buttonItem) => {
      buttonPanel.push(<Button key={buttonItem.text} text={buttonItem.text} modifier={buttonItem.modifier} clickHandler={this.buttonClickHandler} />)
    })

    return buttonPanel
  }

  render() {
    const buttons = [ 
      {text: "AC", modifier: "advanced-operation"},
      {text: "+/-", modifier: "advanced-operation"},
      {text: "%", modifier: "advanced-operation"},
      {text: "/", modifier: "basic-operation"},
      {text: "7", modifier: ""},
      {text: "8", modifier: ""},
      {text: "9", modifier: ""},
      {text: "x", modifier: "basic-operation"},
      {text: "4", modifier: ""},
      {text: "5", modifier: ""},
      {text: "6", modifier: ""},
      {text: "-", modifier: "basic-operation"},
      {text: "1", modifier: ""},
      {text: "2", modifier: ""},
      {text: "3", modifier: ""},
      {text: "+", modifier: "basic-operation"},
      {text: "0", modifier: "grows"},
      {text: ".", modifier: ""},
      {text: "=", modifier: ""},
    ]

    return (
      <div className="button-panel">
        {this._createButtonPanel(buttons)}
      </div>
    )
  }
}
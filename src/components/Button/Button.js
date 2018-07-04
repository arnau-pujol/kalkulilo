import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Button.css'

export class Button extends Component {
  static propTypes = {
    modifier: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
  }

  static defaultProps = {
    modifier: ''
  }

  handleClick = () => {
    const {text} = this.props

    this.props.clickHandler(text)
  }

  render () {
    const {modifier, text} = this.props
    const classNames = [
      "button",
      modifier ? `button--${modifier}` : ''
    ]

    return <button onClick={this.handleClick} className={classNames.join(' ').trim()}>{text}</button>
  }
}
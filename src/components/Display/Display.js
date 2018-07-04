import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Display.css'

export class Display extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired
  }

  render () {
    const {value} = this.props

    return <div className="display">{value}</div>
  }
}
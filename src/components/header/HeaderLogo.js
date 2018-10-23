import React, { Component } from 'react'
import logo from '../../assets/logo.png';

export default class HeaderLogo extends Component {
  render() {
    return (
        <a href="#">
            <img src={logo} class="logo"/>
        </a>
    )
  }
}

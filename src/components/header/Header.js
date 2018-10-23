import React, { Component } from 'react'
import HeaderLogo from './HeaderLogo';
import NavBlock from './NavBlock';
import Banner from '../banner/Banner';

export default class Header extends Component {
  render() {
    return (
        <header class="header">
            <div class="container">
                <div class="headerBlock padding_small">
                    <HeaderLogo />
                    <NavBlock />
                </div>

                <Banner/>
            </div>
        </header>
    )
  }
}

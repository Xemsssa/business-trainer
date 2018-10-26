import React, { Component } from 'react'
import HeaderLogo from './HeaderLogo';
import NavBlock from './NavBlock';
import Banner from '../banner/Banner';

export default class Header extends Component {
  render() {
    return (
        <header className="header">
            <div className="container">
                <div className="headerBlock padding_small">
                    <HeaderLogo />
                    <NavBlock />
                </div>

                <Banner/>
            </div>
        </header>
    )
  }
}

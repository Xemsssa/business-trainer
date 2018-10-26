import React, { Component } from 'react'
import Programm from './Programm';
import Block from './Block';

export default class Adwantages extends Component {

  render() {
    return (
        <div className="container padding_small">
            <h1 className="adwantages_header text_transform font_bold margin_bottom_big">Что вы получите на практикуме? </h1>
        
            <div className="row header_text adwantages_row">
                <Programm />
                <Block />
            </div>
        </div>
    )
  }
}

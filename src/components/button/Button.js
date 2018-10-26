import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        // <button className="text_transform font_bold background_color header_button margin_bottom_small">принять участие</button>
       <><button className= {` ${this.props.width} text_transform font_bold background_color header_button margin_bottom_small`}>принять участие</button></>
    
    )
  }
}

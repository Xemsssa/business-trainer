import React, { Component } from 'react'

export default class InfoBlock extends Component {
  render() {
    return (
        <div className="infoBlock ">
            <h1 className="text_transform font_bold margin_bottom_small infoBlock_header">13 ноября 2018 <br /> года в г. Астана</h1>
    
            <div className="margin_bottom_small">
                <p>Конференц-зал The ONE Hotel Astana <br /> г. Астана, ул. Кадырали Жалайыри, 8</p>
            </div>

            <div className="info_button margin_bottom_small" >
                <button className="text_transform font_bold background_color header_button ">принять участие</button>
            </div>

            <div className="contactsBlock">
                    <a href="tel:+79139161488" className="contactsBlock_link">+7 913 916 14 88</a>
                    <a href="mailto:grokhotov.d@gmail.com" className="contactsBlock_link">grokhotov.d@gmail.com</a>
            </div>
        </div>
    )
  }
}

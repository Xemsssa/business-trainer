import React, { Component } from 'react'

export default class InfoBlock extends Component {
  render() {
    return (
        <div class="infoBlock ">
            <h1 class="text_transform font_bold margin_bottom_small infoBlock_header">13 ноября 2018 <br /> года в г. Астана</h1>
    
            <div class="margin_bottom_small">
                <p>Конференц-зал The ONE Hotel Astana <br /> г. Астана, ул. Кадырали Жалайыри, 8</p>
            </div>

            <div class="info_button margin_bottom_small" >
                <button class="text_transform font_bold background_color header_button ">принять участие</button>
            </div>

            <div class="contactsBlock">
                    <a href="tel:+79139161488" class="contactsBlock_link">+7 913 916 14 88</a>
                    <a href="mailto:grokhotov.d@gmail.com" class="contactsBlock_link">grokhotov.d@gmail.com</a>
            </div>
        </div>
    )
  }
}

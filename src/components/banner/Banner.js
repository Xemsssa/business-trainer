import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className="header_text padding_big">
          <div className="row">
              <div className="col-sm-6">
                  <h1 className="text_transform font_bold headerHeader_text ">Рост бизнеса:</h1>
                  <p className="margin_bottom_big">успех и ошибки крупнейших федеральных и международных проектов</p>

                  <button className="text_transform font_bold background_color header_button margin_bottom_small">принять участие</button>
              </div>
              <div className="col-sm-6 background_color header_info margin_bottom_small">
                  <div className="headerInfo_text">
                      <h4 className="font_bold">Бесплатный живой практикум</h4>
                      <p>Партнерство государства, бизнеса и общества - это единственный способ эффективного развития Вашего бизнеса</p>
                  </div>
              </div>

              <div className="col-sm-12 text_transform font_bold header_bottom ">г. Астана 13 ноября 09:00</div>
          </div>
      </div>
    )
  }
}

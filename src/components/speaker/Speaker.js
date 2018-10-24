import React, { Component } from 'react'

export default class Speaker extends Component {
  render() {
    return (
        <div class="speaker header_text ">
            <div class="container">
                <div class="dima ">
                    <div class="row padding_big">
                        <div class="col-sm-4">
                            <div class="speakerIntroduction">
                                <h1 class="font_bold text_transform margin_bottom_big speakerInfo">Кто ведет <br /> практикум?</h1>
                                <div class="margin_bottom_big">
                                    <h4 class="font_bold ">Дмитрий Грохотов</h4>
                                    <small class="speakerInfo_small">Заместитель управляющего консалтинг <br /> бюро Технологии Развития</small>
                                </div>
                                <p class="speakerInfo_about"> Эксперт по построению долгосрочных стратегий бизнеса, разработке финансовых моделей и оценке рисков федеральных инфраструктурных проектов, реализуемых в форме государственно-частного партнерства.</p>
                            </div>
                        </div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">
                            <div class="speaker_text"> 
                                <span class="arrow ">«</span>
                                <p>Рост бизнеса невозможен без надежных партнеров. Я соединяю интересы бизнеса, общества и государства для реализации самых смелых проектов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
  }
}

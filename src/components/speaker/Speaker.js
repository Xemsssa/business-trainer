import React, { Component } from 'react'

export default class Speaker extends Component {
  render() {
    return (
        <div className="speaker header_text " id="speaker">
            <div className="container">
                <div className="dima ">
                    <div className="row padding_big">
                        <div className="col-sm-4">
                            <div className="speakerIntroduction">
                                <h1 className="font_bold text_transform margin_bottom_big speakerInfo">Кто ведет <br /> практикум?</h1>
                                <div className="margin_bottom_big">
                                    <h4 className="font_bold ">Дмитрий Грохотов</h4>
                                    <small className="speakerInfo_small">Заместитель управляющего консалтинг <br /> бюро Технологии Развития</small>
                                </div>
                                <p className="speakerInfo_about"> Эксперт по построению долгосрочных стратегий бизнеса, разработке финансовых моделей и оценке рисков федеральных инфраструктурных проектов, реализуемых в форме государственно-частного партнерства.</p>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="speaker_text"> 
                                <span className="arrow ">«</span>
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

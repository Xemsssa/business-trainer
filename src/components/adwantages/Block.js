import React, { Component } from 'react'

export default class Block extends Component {
    constructor(props) {
        super(props);

        this.state = {

            adwantages_column1: [
                {
                    id:0,
                    style: 'newPath',
                    header: 'Новый подход к клиентам',
                    paragraph_text: `Вы узнаете, как строить партнерские
                        отношения с клиентом. Научитесь общаться
                        с ними на разных стадиях продажи
                        и создавать востребованость продукта.`},
                {
                    id:1,
                    style: 'marketing_support',
                    header: 'Маркетинговая поддержка',
                    paragraph_text: `Вы на наглядных примерах увидите,
                        как важен маркетинг в развитии
                        любого бизнеса. Узнаете, почему стоит
                        отдать продвижение компании
                        на аутсорс и посвятить больше
                        времени упаковке продукта.`},
                {
                    id:2,
                    style: 'financial_support',
                    header: 'Получение финансирования',
                    paragraph_text: `Получение грантового и льготного
                        финансирования и налоговых льгот.
                        Вы сможете структурировать проект,
                        чтобы государственное финансирование
                        не перекрыло кислород всей компании.`},
            ],


            adwantages_column2:[
                {
                    id:3,
                    style: 'newPartners',
                    header: 'Новые партнеры',
                    paragraph_text: `Научитесь договариваться с любым
                        партнером: партнер-инвестор,
                        партнер-клиент, партнер-команда,
                        партнер-подрядчик, партнер-государство.`},
                {
                    id:4,
                    style: 'finance_independent',
                    header: 'Финансовая независимость',
                    paragraph_text: `Вы сможете оперативно принимать решения
                    касаемо операционных и стратегических
                    вопросов. Узнаете, как с помощью показателей
                    можно достигать любых целей.`},
                {
                    id:5,
                    style: 'newPartners',
                    header: 'Построение команды',
                    paragraph_text: `Вы узнаете как строить отношения в колектике
                        как к внутреннему клиенту. и узнаете какие
                        качества подталкивают команду к развитию
                        и самостоятельному принятию решений.`},

                {
                    id:6,
                    style: 'effectiveness_evaluation',
                    header: 'Оценка эффективности',
                    paragraph_text: `Вы узнаете как строить отношения в колектике
                    как к внутреннему клиенту. и узнаете какие
                    качества подталкивают команду к развитию
                    и самостоятельному принятию решений.`}
            ]
        }
    }

  render() {
    return (
      <div className="col-sm-7 wrapper">
          <div className="row ">
              <div className="col-md-6 ">
                {this.state.adwantages_column1.map((item, key) => (
                    <div className={`height_33 background_style padding_huge padding_hor_big margin_bottom_small ${item.style}`} key={key}>
                        <h4 className="font_bold  text_transform">{item.header}</h4>
                        <p className="paragraph_text">{item.paragraph_text}</p>
                    </div>
                ))}
              </div>

            <div className="col-md-6 ">
                {this.state.adwantages_column2.map((item, key) => (
                    <div className={`height_25 background_style padding_big padding_hor_big margin_bottom_small ${item.style}`} key={key}>
                        <h4 className="font_bold  text_transform">{item.header}</h4>
                        <p className="paragraph_text">{item.paragraph_text}</p>
                    </div>
                ))}
              </div>
          </div>
        </div>
    )
  }
}

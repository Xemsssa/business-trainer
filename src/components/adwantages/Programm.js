import React, { Component } from 'react'
import Bron from './Bron';
import Punkt from './Punkt';

export default class Programm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            practicum: [
                {id: 0, timeFrom: '16:00', timeTill: '16:30', header: 'Регистрация, нетворкинг', programm: ''},
                {id: 1, timeFrom: '16:30', timeTill: '18:30', header: 'Часть 1. Бизнес, общество', programm: [
                    `Установление партнерских отношений
                    с клиентами, подрядчиками, поставщиками,
                    инвесторами, формирование команды
                    и благотворительность.`,
                    `Мы рассмотрим основные ошибки
                    и успешные действия, доказавших
                    свою эффективность, основанные
                    на кейсах моих клиентов.`
                ]},
                {id: 2, timeFrom: '18:30', timeTill:'19:00', header: 'Перерыв', programm: ''},
                {id: 3, timeFrom: '19:00', timeTill:'21:00', header: 'Часть 2. Разбор кейсов участников', programm: [
                    `Поиск эффективного решения Вашей ситуации,
                    описанной при регистрации.`,
                    `Мы рассмотрим основные ошибки и успешные
                    действия, доказавших свою эффективность,
                    основанные на кейсах инвесторов и чиновников.`
                ]},
            ]
        }
    }

  render() {
    return (
        <div className="col-sm-5 adwantages_column">
            <div className="programm background_style padding_big padding_hor margin_bottom_small">
                <h4 className="text_transform font_bold margin_bottom_small">Программа практикума</h4>
                {this.state.practicum.map((item, key) => (
                    <Punkt item={item} key={key} />
                ))}
                {/* <hr></hr> */}
            </div>
            
            <Bron/>
        </div>
    )
  }
}

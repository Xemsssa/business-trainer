import React, { Component } from 'react'
import Programm from './Programm';

export default class Adwantages extends Component {
  render() {
    return (
        <div class="container padding_small">
            <h1 class="adwantages_header text_transform font_bold margin_bottom_big">Что вы получите на практикуме? </h1>
        
            <div class="row header_text adwantages_row">
                <Programm />

                <div class="col-sm-7">

                    <div class="row ">
                        <div class="col-md-6 ">
                            <div class="newPath height_33 background_style padding_huge padding_hor_big margin_bottom_small">
                                <h4 class="font_bold  text_transform">Новый подход к клиентам</h4>
                                <p class="paragraph_text">Вы узнаете, как строить партнерские
                                отношения с клиентом. Научитесь общаться
                                с ними на разных стадиях продажи
                                и создавать востребованость продукта.</p>
                            </div>
                            <div class="marketing_support height_33 padding_huge padding_hor_big margin_bottom_small">
                                <h4 class="font_bold  text_transform">Маркетинговая
                                    поддержка</h4>
                                <p class="paragraph_text">Вы на наглядных примерах увидите,
                                    как важен маркетинг в развитии
                                    любого бизнеса. Узнаете, почему стоит
                                    отдать продвижение компании
                                    на аутсорс и посвятить больше
                                    времени упаковке продукта.
                                </p>
                            </div>
            
                            <div class="financial_support height_33 background_style padding_huge padding_hor_big margin_bottom_small">
                                <h4 class="font_bold  text_transform"> Получение
                                        финансирования</h4>
                                <p class="paragraph_text">Получение грантового и льготного
                                    финансирования и налоговых льгот.
                                    Вы сможете структурировать проект,
                                    чтобы государственное финансирование
                                    не перекрыло кислород всей компании.</p>
                            </div>
                        </div>
            
                        
                        <div class="col-md-6 adwantages_column ">
                            <div class="newPartners height_25 background_style padding_big padding_hor_big margin_bottom_small">
                                <h4 class="font_bold  text_transform">Новые партнеры</h4>
                                <p class="paragraph_text">Научитесь договариваться с любым
                                    партнером: партнер-инвестор,
                                    партнер-клиент, партнер-команда,
                                    партнер-подрядчик, партнер-государство.</p>
            
                            </div>
                            <div class="finance_independent background_style padding_big padding_hor_big margin_bottom_small">
                                <h4 class="font_bold  text_transform">Финансовая
                                        независимость</h4>
                                <p class="paragraph_text">Вы сможете оперативно принимать решения
                                    касаемо операционных и стратегических
                                    вопросов. Узнаете, как с помощью показателей
                                    можно достигать любых целей.
                                </p>
            
                            </div>
                            <div class="newPartners background_style padding_big padding_hor_big margin_bottom_small">
                                    <h4 class="font_bold  text_transform"> Построение
                                            команды</h4>
                                    <p class="paragraph_text">Вы узнаете как строить отношения в колектике
                                            как к внутреннему клиенту. и узнаете какие
                                            качества подталкивают команду к развитию
                                            и самостоятельному принятию решений.
                                    </p>    
                                </div>
            
            
                            <div class="effectiveness_evaluation background_style padding_big padding_hor_big margin_bottom_small">
                                <h4 class="font_bold text_transform">Оценка
                                        эффективности</h4>
                                <p  class="paragraph_text">Вы узнаете как строить отношения в колектике
                                    как к внутреннему клиенту. и узнаете какие
                                    качества подталкивают команду к развитию
                                    и самостоятельному принятию решений.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

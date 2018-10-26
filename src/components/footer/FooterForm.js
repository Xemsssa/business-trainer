import React, { Component } from 'react'

export default class FooterForm extends Component {
  render() {
    return (
        <form>
            <div class="">
                <div class="form-group">
                    <input type="text" placeholder="имя"  class="form-control form_input"/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="телефон" class="form-control form_input"/>
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Эл. Адрес"  class="form-control form_input"/>
                </div>
                <div class="form-group mabo">
                    <button class=" background_color header_text form_button text_transform">Принять участие</button>
                </div>
            </div>
        </form> 
    )
  }
}

import React, { Component } from 'react'

export default class FooterForm extends Component {
  render() {
    return (
        <form>
            <div className="">
                <div className="form-group">
                    <input type="text" placeholder="имя"  className="form-control form_input"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="телефон" className="form-control form_input"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Эл. Адрес"  className="form-control form_input"/>
                </div>
                <div className="form-group mabo">
                    <button className=" background_color header_text form_button text_transform">Принять участие</button>
                </div>
            </div>
        </form> 
    )
  }
}

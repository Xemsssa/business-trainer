import React, { Component } from 'react'
import Button from '../button/Button';

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
                <div className="form-group">
                    <Button width="width"/>
                    {/* <Button style="width: 100%"/> */}
                </div>
            </div>
        </form> 
    )
  }
}

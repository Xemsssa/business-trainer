import React, { Component } from 'react'

export default class Punkt extends Component {
  render() {
    let that = this.props.item;

    return (
        <div className="row">
            <div className="col-md-3  time_text">
                {that.timeFrom}-{that.timeTill}
            </div>
            <div className="col-md-9 font_bold margin_bottom_small">
                <p>{that.header}</p>

                <p>{that.programm}</p>
            </div>
        </div>
    )
  }
}

import React, { Component } from 'react'

export default class NavBlock extends Component {
   constructor(props) {
       super(props);
       this.state = {
           navBlock: [
               {id: 0, navName: 'Программа', navLink: '#'},
               {id: 1, navName: 'Ведущий', navLink: '#'},
            ]
       }
    }

  render() {
    return (
        <div className="navBlock">
            <a className="hamburger" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                <div className="line"></div>
                <div className="line" style={{marginTop: 5+'px', marginBottom: 5+'px'}}></div>
                <div className="line"></div>
            </a>
            <div className="" id="navbar-collapse">
                <ul className="nav navbar-nav headerNav navLink_theme font_bold text_transform">
                    {this.state.navBlock.map((item, key) => (
                        <li className="nav-item" key={key}>
                            <a href={item.navLink} className="nav-link header_text">
                                {item.navName}
                            </a>
                        </li>    
                    ))}
                </ul>
            </div>
        </div>
    )
  } 
}

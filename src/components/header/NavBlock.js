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
        <div class="navBlock">
            <a class="hamburger" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                <div class="line"></div>
                <div class="line" style={{marginTop: 5+'px', marginBottom: 5+'px'}}></div>
                <div class="line"></div>
            </a>
            <div class="" id="navbar-collapse">
                <ul class="nav navbar-nav headerNav navLink_theme font_bold text_transform">
                    {this.state.navBlock.map((item, key) => (
                        <li class="nav-item">
                            <a href={item.navLink} class="nav-link header_text">
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

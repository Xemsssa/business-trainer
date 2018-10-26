import React, { Component } from 'react'
import FooterForm from './FooterForm';
import InfoBlock from './InfoBlock';

export default class Footer extends Component {
  render() {
    return (
        <footer class="footer ">
            <div class="container">
                <div class="row ">
                    <div class="footerBlock padding_big">

                        <div class="col-sm-6 form padding_big">
                            <h1 class="font_bold text_transform">Заполните форму</h1>
                            <p class="margin_bottom_small">Забронируйте ваше участие прямо сейчас. <br/> 
                                Живое участие и личная консультация спикера</p>
                                <FooterForm/>
                        </div> 

                        <div class="col-sm-6 info header_text padding_big">
                            <InfoBlock/>
                        </div> 
                    </div>

                    
                </div>
            
            </div>
        </footer>
    )
  }
}

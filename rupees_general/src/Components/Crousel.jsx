
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay: true,
    };
    return (
      <div >
       
        <Slider {...settings}>
          <div>
            
                <img alt="1img" src="https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1667574383955.coreimg.100.1200.jpeg/1673499572004/wk51-home-1140x300-hero-desktop-appsuite.jpeg"/>
           
          </div>
          <div>
            <img alt="2img" src="https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1649589574693.coreimg.100.1200.jpeg/1673629774452/wk51-home-2280x700-hero-desktop-val-candyr1.jpeg"/>
          </div>
          <div>
            <img src="https://www.dollargeneral.com/_jcr_content/root/responsivegrid/responsivegrid/dgcarousel_copy_copy/item_1671569524197.coreimg.100.1200.jpeg/1673629830974/wk51-home-2280x700-hero-desktop-refreshyourbedroomr1.jpeg" alt=""  />
          </div>
          <div>
           <img src="https://tpc.googlesyndication.com/simgad/15460310567184055584" alt="" />
          </div>
          <div>
            <img src="https://tpc.googlesyndication.com/simgad/8525851135069553280" alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}
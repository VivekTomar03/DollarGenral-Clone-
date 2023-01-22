import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  "../Components/MultiSlid.css"

import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from "@chakra-ui/card";
const data = [
    {
        img:"https://cdn.cpnscdn.com/static.coupons.com/ext/bussys/cpa/pod/11/381/3311381_738c5632-48dc-4e4f-a4c3-df9a3e465b8c.gif",
        save:"Save Rs 50",
        title:"Arms And Hammer",
        description:"on one(1) get 50 res back ",
        exp:"10/10/2023"
    },
    {
        img:"https://cdn.cpnscdn.com/static.coupons.com/ext/bussys/cpa/pod/42/221/3242221_9401a2ad-6dc1-49cb-98d3-2da5f7c03e75.gif",
        save:"Save Rs 50",
        title:"Shampoo",
        description:"on one(1) get 50 res back ",
        exp:"10/10/2023"
    },
    {
        img:"https://cdn.cpnscdn.com/static.coupons.com/ext/bussys/cpa/pod/44/161/3244161_b80e9b07-263f-439b-8d64-9f8a92489514.gif",
        save:"Save Rs 50",
        title:"Goldfish",
        description:"on one(1) get 50 res back ",
        exp:"10/10/2023"
    },
    {
      img:"https://cdn.cpnscdn.com/static.coupons.com/ext/bussys/cpa/pod/68/691/3168691_9d06156b-9027-4dd3-8614-7f74beea2c7b.gif",
      save:"Save Rs 50",
      title:"Imoduim",
      description:"on one(1) get 50 res back ",
      exp:"10/10/2023"
  },
  {
    img:"https://cdn.cpnscdn.com/static.coupons.com/ext/bussys/cpa/pod/72/241/3272241_d3d01485-9df2-4144-bfef-f8901c8a588e.gif",
    save:"Save Rs 50",
    title:"Disposa",
    description:"on one(1) get 50 res back ",
    exp:"10/10/2023"
},
 ]


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode:true,
      centerPadding: '60px',
      autoplay:true
       
      
    };
    return (
      <div >
        
        <Slider {...settings} id="slider">
          
          {
            data.map((item)=>(
              <Card >
                <img  src={item.img} alt={item.name}/>
                <h5>{item.title}</h5>
                <h4>{item.save}</h4>
                <p>{item.description}</p>
                <p>{item.exp}</p>
                <button>Add Deal</button>
              </Card>
            ))
          }
        </Slider>
      </div>
    );
  }
}
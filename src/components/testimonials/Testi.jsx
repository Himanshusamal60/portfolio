import React from "react";
import './testimonial.css'
// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import user from "../../assets/Admin-Profile-Vector-PNG-Image.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function Testi() {
  return (
    <Swiper 
    modules={Pagination}
    spaceBetween={40}
    slidesPerView={1}
    Pagination={{clickable:true}}
className="container testimonials__container">
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={user} alt="" />
        </div>
        <h5 className="client__name">John doe</h5>
        <small className="client__review">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          molestiae repellat provident ratione sint cupiditate magnam earum
          impedit. Quam dignissimos fugiat quia. Placeat veritatis debitis
          voluptates magnam doloribus consequatur reiciendis!
        </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={user} alt="" />
        </div>
        <h5 className="client__name">John doe</h5>
        <small className="client__review">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          molestiae repellat provident ratione sint cupiditate magnam earum
          impedit. Quam dignissimos fugiat quia. Placeat veritatis debitis
          voluptates magnam doloribus consequatur reiciendis!
        </small>
      </SwiperSlide>
      <SwiperSlide className="testimonial">
        <div className="client__avatar">
          <img src={user} alt="" />
        </div>
        <h5 className="client__name">John doe</h5>
        <small className="client__review">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          molestiae repellat provident ratione sint cupiditate magnam earum
          impedit. Quam dignissimos fugiat quia. Placeat veritatis debitis
          voluptates magnam doloribus consequatur reiciendis!
        </small>
      </SwiperSlide>
    </Swiper>
  );
}

export default Testi;

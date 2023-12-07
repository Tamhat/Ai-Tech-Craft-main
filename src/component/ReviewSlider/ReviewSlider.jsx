import React, { useRef, useState } from "react";
import {  Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide,  } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { reviewSliderData } from "../../data/data";
import SliderCard from "../SliderCard/SliderCard";

import "./ReviewSlider.css";

const ReviewSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const swiper = useSwiper();

  return (
    <section>
      <div className="container rSlider__container">
        <Swiper
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          className="mySwiper2"
        >
          {reviewSliderData &&
            reviewSliderData?.map((curElem) => {
              return (
                <SwiperSlide key={curElem.id}>
                  <SliderCard {...curElem} />
                </SwiperSlide>
              );
            })}

          {/* <div className="slider__btn">
            <button onClick={() => swiper.slidePrev()}>Prev</button>
            <button onClick={() => swiper.slideNext()}>Next</button>
          </div> */}
        </Swiper>

        <div className="slider__control">
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {reviewSliderData &&
              reviewSliderData?.map((curElem) => {
                return (
                  <SwiperSlide key={curElem.id}>
                    <img src={curElem.img} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { clientSuccessData } from "../../data/data";
import ClientSuccessCard from "../../shared/ClientSuccessCard/ClientSuccessCard";

import "./CSuccessSlider.css";

const CSuccessSlider = () => {
  return (
    <section>
      <div className="container cS__container">
      <h1 className="heading">Client Success</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"

          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {clientSuccessData &&
            clientSuccessData?.map((curElem) => {
              return (
                <SwiperSlide key={curElem.id}>
                <ClientSuccessCard {...curElem} />
              </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default CSuccessSlider;


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { marketingAgencyData } from "../../data/data";
import MarketingAgencyCard from "../../shared/MarketingAgencyCard/MarketingAgencyCard";

import "./MarketingAgency.css";

const MarketingAgency = () => {
  return (
    <section>
      <div className="container mAgency__container">
        <div className="mAgency__left">
          <h1 className="heading">
            Why Comrade Is the Right Marketing Agency for You
          </h1>
          <div className="plan">
            <p className="card__des">
              Comrade is one of the best digital marketing agencies nationwide,
              that also offers service to businesses nationwide. To guarantee
              your success we follow a few simple rules:
            </p>

            <ul>
              <li className="card__des">
                A new project is never taken on unless we have a written plan to
                deliver results.
              </li>
              <li className="card__des">
                Our team analyzes our clients’ data and determines precisely how
                our services will help them grow.
              </li>
              <li className="card__des">
                Unlike other digital marketing agencies, we guarantee the
                results of our work.
              </li>
              <li className="card__des">
                Our team of digital marketing experts is your partner for
                long-term success, delivering an inbound strategy that delivers
                on your business goals.
              </li>
            </ul>
          </div>

          <div className="mAgency__details">
            <div className="mAgency__card">
              <h1 className="heading">12+</h1>
              <p className="card__title">YEARS IN BUSINESS</p>
            </div>
            <div className="mAgency__card">
              <h1 className="heading">30+</h1>
              <p className="card__title">TEAM MEMBERS</p>
            </div>
            <div className="mAgency__card">
              <h1 className="heading">300+</h1>
              <p className="card__title">DESIGN AND MARKETING PROJECTS</p>
            </div>
            <div className="mAgency__card">
              <h1 className="heading">92+</h1>
              <p className="card__title">CLIENT RETENTION RATE</p>
            </div>
          </div>
        </div>


        <div className="mAgency__right">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {marketingAgencyData &&
              marketingAgencyData?.map((curElem) => {
                return (
                  <SwiperSlide key={curElem.id}>
                    <MarketingAgencyCard {...curElem} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MarketingAgency;

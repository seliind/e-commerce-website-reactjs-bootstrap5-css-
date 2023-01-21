import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export const FamousProduct = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="famous-card">
            {" "}
            <img
              src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/05/Realme-Watch.png"
              alt="famous"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="famous-card">
            {" "}
            <img
              src="https://preceni.com/wp-content/uploads/2021/08/tnyjmukkumjyntbvrbt.jpg"
              alt="famous"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="famous-card">
            {" "}
            <img
              src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/12/minix-hawk-1640346961.jpg"
              alt="famous"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="famous-card">
            {" "}
            <img
              src="https://img.myloview.com/stickers/modern-smartwatch-weather-forecast-app-on-screen-tracking-outside-temperature-on-dark-background-3d-illustration-700-149959276.jpg"
              alt="famous"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="famous-card">
            {" "}
            <img
              src="https://cdn.wareable.com/assets/images/86-apple-watch-wearable-technology-features-10-best-smartwatches-for-iphone-and-apple-watch-alternatives-non-imported-image3-kb8yagds0x.jpg"
              alt="famous"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="famous-card">
            {" "}
            <img
              src="  https://media.istockphoto.com/photos/businessman-press-button-find-job-on-watch-in-hand-dark-background-picture-id665284494?b=1&k=20&m=665284494&s=612x612&w=0&h=1MMP231vlJfZHVb-v2CMHGRvPWGD3GylwRvhc8VeOXI="
              alt="famous"
            />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

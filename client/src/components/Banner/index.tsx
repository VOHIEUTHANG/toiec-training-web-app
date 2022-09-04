import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// STYLES
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <section className="sec-banner">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="border-sm max-h-[50vh] w-full flex items-center justify-center overflow-hidden">
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/book_text_motivation_coffee_hand_119514_1920x1080.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm  max-h-[50vh] w-full flex items-center justify-center overflow-hidden">
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/pillar_plate_inscription_119232_1920x1080.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-sm  max-h-[50vh] w-full flex items-center justify-center overflow-hidden">
            <img
              className="img-styles"
              src="https://images.wallpaperscraft.com/image/single/inscription_pier_loneliness_128155_1920x1080.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;

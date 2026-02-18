import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './ImageCarousel.module.scss';
import { ChevronButton } from '../common/Buttons';

export const ImageCarousel = () => {
  return (
    <div className={styles.banner}>
      <ChevronButton
        direction="left"
        className={styles['js-prev']}
      />

      <div className={styles.banner__slider}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: `.${styles.banner__pagination}`,
          }}
          navigation={{
            prevEl: `.${styles['js-prev']}`,
            nextEl: `.${styles['js-next']}`,
          }}
        >
          <SwiperSlide>
            <img
              src="img/main.png"
              alt="iPhone 14 Pro"
              className={styles.banner__image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="img/banner-phones.png"
              alt="Phones"
              className={styles.banner__image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="img/banner-accessories.png"
              alt="Accessories"
              className={styles.banner__image}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <ChevronButton
        direction="right"
        className={styles['js-next']}
      />

      {/* Pagination Container */}
      <div className={styles.banner__pagination} />
    </div>
  );
};

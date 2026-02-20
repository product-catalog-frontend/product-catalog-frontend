import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import styles from './HotPricesCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import type { Product } from '../../types/Product/Product';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  data: Product[];
}
export const HotPricesCarousel = ({ data }: Props) => {
  const discountData = data
    .filter((product) => product.fullPrice - product.price !== 0)
    .sort((a, b) => {
      const discountA = a.fullPrice - a.price;
      const discountB = b.fullPrice - a.price;

      return discountB - discountA;
    });
  return (
    <div className={styles.banner}>
      <h2>Hot prices</h2>
      <ChevronButton
        direction="left"
        className={styles['js-prev']}
      />
      <ChevronButton
        direction="right"
        className={styles['js-next']}
      />
      <div className={styles['banner__slider']}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          speed={800}
          navigation={{
            prevEl: `.${styles['js-prev']}`,
            nextEl: `.${styles['js-next']}`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {discountData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                showFullPrice={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

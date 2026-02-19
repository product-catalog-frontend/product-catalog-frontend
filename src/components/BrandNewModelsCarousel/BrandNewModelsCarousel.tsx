import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

import styles from './BrandNewModelsCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import type { Product } from '../../types/Product/Product';
import { ProductCard } from '../ProductCard/ProductCard';

interface Props {
  data: Product[];
}

export const BrandNewModelsCarousel = ({ data }: Props) => {
  const newModels = data.filter((product) => product.year === 2022);
  return (
    <div className={styles.banner}>
      <h2>Brand new models</h2>
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
          spaceBetween={0}
          slidesPerView={4}
          loop={newModels.length > 4}
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
          {newModels.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

import styles from './HotPricesCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import { Slider } from '../Slider/Slider';
import { useProductStore } from '../../store/useProductStore';

export const HotPricesCarousel = () => {
  const discountProducts = useProductStore((state) => state.discountProducts);
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
      <Slider
        data={discountProducts}
        showFullPrice={true}
      />
    </div>
  );
};

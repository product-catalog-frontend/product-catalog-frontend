import styles from './MayLikeCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import { Slider } from '../Slider/Slider';
import { useProductStore } from '../../store/useProductStore';

export const MayLikeCarousel = () => {
  const mayLikeProducts = useProductStore((state) => state.mayLikeProducts);
  return (
    <div className={styles.banner}>
      <h2>You may also like</h2>
      <ChevronButton
        direction="left"
        className={styles['js-prev']}
      />
      <ChevronButton
        direction="right"
        className={styles['js-next']}
      />
      <Slider data={mayLikeProducts} />
    </div>
  );
};

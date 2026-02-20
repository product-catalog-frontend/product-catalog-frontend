import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { BrandNewModelsCarousel } from '../../components/BrandNewModelsCarousel/BrandNewModelsCarousel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPricesCarousel } from '../../components/HotPricesCarousel/HotPricesCarousel';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <h1 className={styles.welcomeTitle}>Welcome to Nice Gadgets store!</h1>
      <ImageCarousel />
      <BrandNewModelsCarousel />
      <ShopByCategory />
      <HotPricesCarousel />
    </>
  );
};

import styles from './ProductDetailsPage.module.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';
import { getProductDetails } from '../../api/productsDetails';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { useState, useEffect } from 'react';
import {
  HeartButton,
  NumberButton,
  PrimaryButton,
  RoundButton,
} from '../../components/common/Buttons';
import { HotPricesCarousel } from '../../components/HotPricesCarousel/HotPricesCarousel';
import type { ProductDetails } from '../../types/Product/Product';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { useCartStore } from '../../store/useCartStore';
import { colorMap } from '../../utils/colorMap';

export const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { productId = '' } = useParams();
  const getProductByItemId = useProductStore((state) => state.getProductByItemId);
  const products = useProductStore((state) => state.products);

  const product = getProductByItemId(productId);

  const favourites = useFavouritesStore((state) => state.favourites);
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite);

  const isFavourite = product ? favourites.some((item) => item.id === product.id) : false;

  const handleFavouriteClick = () => {
    if (product) {
      toggleFavourite(product);
    }
  };

  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeItem);
  const checkIsInCart = useCartStore((state) => state.isInCart);

  const isInCart = product ? checkIsInCart(product.id) : false;

  const handleAddToCart = () => {
    if (product) {
      if (!isInCart) {
        addToCart(product);
      } else {
        removeFromCart(product.id);
      }
    }
  };

  const [details, setDetails] = useState<ProductDetails | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');

  useEffect(() => {
    const fetchDetails = async () => {
      if (productId && product?.category) {
        try {
          const data = await getProductDetails(productId, product.category);
          setDetails(data);

          setSelectedImage(data.images[0]);
          setSelectedColor(data.color);
          setSelectedCapacity(data.capacity);
        } catch (error) {
          console.error('Failed to load details', error);
        }
      }
    };

    fetchDetails();
  }, [productId, product?.category]);

  if (!details) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return (
      <div>
        <img
          src={getCleanImagePath('product-not-found.png')}
          alt="product-not-found"
        />
      </div>
    );
  }

  const {
    namespaceId,
    category,
    name,
    images,
    colorsAvailable,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
    description,
    capacity,
    camera,
    zoom,
    cell,
  } = details;

  const handleColorChange = (newColor: string) => {
    const newProductId = `${namespaceId}-${capacity.toLowerCase()}-${newColor}`;

    navigate(`/${category}/${newProductId}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.mainContent}>
        <div className={styles.gallery}>
          <div className={styles.thumbnails}>
            {images.map((image: string) => (
              <div
                key={image}
                className={`${styles.thumbnail} ${selectedImage === image ? styles.thumbnailActive : ''}`}
              >
                <img
                  src={getCleanImagePath(image)}
                  alt="preview"
                />
              </div>
            ))}
          </div>
          <div className={styles.mainImage}>
            <img
              src={getCleanImagePath(selectedImage || images[0])}
              alt={selectedImage}
            />
          </div>
        </div>

        <div className={styles.infoPanel}>
          <div className={styles.optionSection}>
            <p className={styles.smallTextSecondary}>Available colors</p>
            <div className={styles.colorOptions}>
              {colorsAvailable.map((colorItem: string) => (
                <RoundButton
                  key={colorItem}
                  color={colorMap[colorItem] ?? colorItem}
                  selected={selectedColor === colorItem}
                  onClick={() => handleColorChange(colorItem)}
                />
              ))}
            </div>
          </div>

          <div className={styles.optionSection}>
            <p className={styles.smallTextSecondary}>Select capacity</p>
            <div className={styles.capacityOptions}>
              {capacityAvailable.map((cap: string) => (
                <NumberButton
                  key={cap}
                  text={cap}
                  selected={selectedCapacity === cap}
                  onClick={() => setSelectedCapacity(cap)}
                />
              ))}
            </div>
          </div>

          <div className={styles.purchaseSection}>
            <div className={styles.priceContainer}>
              <h2 className={styles.price}>${priceDiscount || priceRegular}</h2>
              {priceDiscount && <span className={styles.oldPrice}>${priceRegular}</span>}
            </div>

            <div className={styles.actions}>
              <PrimaryButton
                onClick={handleAddToCart}
                selected={isInCart}
              >
                {isInCart ? 'Added to cart' : 'Add to cart'}
              </PrimaryButton>
              <HeartButton
                selected={isFavourite}
                onClick={handleFavouriteClick}
              />
            </div>
          </div>

          <div className={styles.specsShort}>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Screen</span>
              <span className={styles.smallTextPrimary}>{screen}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Resolution</span>
              <span className={styles.smallTextPrimary}>{resolution}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Processor</span>
              <span className={styles.smallTextPrimary}>{processor}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>RAM</span>
              <span className={styles.smallTextPrimary}>{ram}</span>
            </div>
          </div>
        </div>

        <span className={styles.itemId}>ID: {product.id}</span>
      </div>

      <div className={styles.detailsSection}>
        <div className={styles.aboutBlock}>
          <h3>About</h3>
          {description.map((desc, index) => (
            <div
              key={index}
              className={styles.descriptionItem}
            >
              <h4>{desc.title}</h4>
              <p>{desc.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.techSpecsBlock}>
          <h3>Tech specs</h3>
          <div className={styles.specsList}>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Screen</span>
              <span className={styles.smallTextPrimary}>{screen}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Resolution</span>
              <span className={styles.smallTextPrimary}>{resolution}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Processor</span>
              <span className={styles.smallTextPrimary}>{processor}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>RAM</span>
              <span className={styles.smallTextPrimary}>{ram}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Built in memory</span>
              <span className={styles.smallTextPrimary}>{capacity}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Camera</span>
              <span className={styles.smallTextPrimary}>{camera}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Zoom</span>
              <span className={styles.smallTextPrimary}>{zoom}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Cell</span>
              <span className={styles.smallTextPrimary}>{cell.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      <HotPricesCarousel data={products} />
    </div>
  );
};

import styles from './ProductDetailsPage.module.scss';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductStore } from '../../store/useProductStore';
import { getProductDetails } from '../../api/productsDetails';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import {
  HeartButton,
  NumberButton,
  PrimaryButton,
  RoundButton,
  ArrowButton,
} from '../../components/common/Buttons';
import type { ProductCategory, ProductDetails } from '../../types/product';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { useCartStore } from '../../store/useCartStore';
import { colorMap } from '../../utils/colorMap';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { MayLikeCarousel } from '../../components/MayLikeCarousel/MayLikeCarousel';

export const ProductDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { category, productId = '' } = useParams();
  const getProductByItemId = useProductStore((state) => state.getProductByItemId);
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
  const cart = useCartStore((state) => state.cart);
  const isInCart = product ? cart.some((item) => item.id === product.id) : false;

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

  useEffect(() => {
    const fetchDetails = async () => {
      setDetails(null);
      setIsLoading(true);

      const categoryToFetch = (product?.category ?? category) as ProductCategory;

      if (productId && categoryToFetch) {
        try {
          const data = await getProductDetails(productId, categoryToFetch);
          setDetails(data);
          setSelectedImage(data.images[0]);
        } catch (error) {
          console.error('Failed to load details', error);
        }
      }

      setIsLoading(false);
    };
    fetchDetails();
  }, [productId, product?.category, category]);

  useEffect(() => {
    if (!isLoading && !product && !details) {
      const timer = setTimeout(() => {
        navigate(`/${category}`);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, product, details, category, navigate]);

  if (!isLoading && !product && !details) {
    return (
      <div className={styles.notFound}>
        <img
          src={getCleanImagePath('product-not-found.png')}
          alt="Product not found"
          className={styles.notFoundImage}
        />
        <h2 className={styles.notFoundTitle}>Product not found</h2>
        <p className={styles.notFoundText}>You will be redirected to catalog in 3 seconds...</p>
        <Link
          to={`/${category}`}
          className={styles.notFoundLink}
        >
          Go back now
        </Link>
      </div>
    );
  }

  if (isLoading || !details || !product) {
    return (
      <div className={styles.container}>
        <div>Loading...</div>
      </div>
    );
  }

  const {
    namespaceId,
    name,
    capacityAvailable,
    selectedCapacity,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    selectedColor,
    images,
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = details;

  const handleColorChange = (newColor: string) => {
    const newProductId = `${namespaceId}-${selectedCapacity.toLowerCase()}-${newColor}`;

    navigate(`/${category}/${newProductId}`);
  };

  const handleCapacityChange = (newCapacity: string) => {
    const newProductId = `${namespaceId}-${newCapacity.toLowerCase()}-${selectedColor}`;

    navigate(`/${category}/${newProductId}`);
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs
        categoryName={details.category}
        productName={details.name}
      />

      <ArrowButton
        text="Back"
        back
      />
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.mainContent}>
        <div className={styles.gallery}>
          <div className={styles.thumbnails}>
            {images.map((image: string) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={cn(styles.thumbnail, {
                  [styles.thumbnailActive]: selectedImage === image,
                })}
              >
                <img
                  src={getCleanImagePath(image)}
                  alt="preview"
                />
              </button>
            ))}
          </div>
          <div className={styles.mainImage}>
            <img
              src={getCleanImagePath(selectedImage || images[0])}
              alt={name}
            />
          </div>
        </div>

        <div className={styles.infoPanel}>
          <span className={cn(styles.itemId, styles.itemIdMobile)}>ID: {product.id}</span>

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
              {capacityAvailable.map((capacity: string) => (
                <NumberButton
                  key={capacity}
                  text={capacity}
                  selected={selectedCapacity === capacity}
                  onClick={() => handleCapacityChange(capacity)}
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

        <span className={cn(styles.itemId, styles.itemIdDesktop)}>ID: {product.id}</span>
      </div>

      <div className={styles.detailsSection}>
        <div className={styles.aboutBlock}>
          <h3>About</h3>
          {description.map((desc) => (
            <div
              key={desc.title}
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
              <span className={styles.smallTextPrimary}>{selectedCapacity}</span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Camera</span>
              <span className={styles.smallTextPrimary}>
                {camera && camera !== 'undefined' ? camera : 'Not applicable'}
              </span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Zoom</span>
              <span className={styles.smallTextPrimary}>
                {zoom && zoom !== 'undefined' ? zoom : 'Not applicable'}
              </span>
            </div>
            <div className={styles.specLine}>
              <span className={styles.smallTextSecondary}>Cell</span>
              <span className={styles.smallTextPrimary}>{cell.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      <MayLikeCarousel />
    </div>
  );
};

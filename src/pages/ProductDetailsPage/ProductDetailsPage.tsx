import { useParams } from 'react-router-dom';
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

export const ProductDetailsPage = () => {
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

  if (!details) {
    return <div>Loading product details...</div>;
  }

  const {
    name,
    images,
    colorsAvailable,
    capacityAvailable,
    priceRegular,
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

  return (
    <>
      <div>
        <h2>{name}</h2>
        <div>
          <div>
            {images.map((image: string) => (
              <img
                key={image}
                src={getCleanImagePath(image)}
                alt={image}
              />
            ))}
            <div>
              <img
                src={getCleanImagePath(selectedImage || images[0])}
                alt={selectedImage}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Available colors</p>
              {colorsAvailable.map((colorItem: string) => (
                <RoundButton
                  key={colorItem}
                  selected={selectedColor === colorItem}
                  onClick={() => setSelectedColor(colorItem)}
                />
              ))}
            </div>
            <div>
              <p>Select capacity</p>
              {capacityAvailable.map((cap: string) => (
                <NumberButton
                  key={cap}
                  text={cap}
                  selected={selectedCapacity === cap}
                  onClick={() => setSelectedCapacity(cap)}
                />
              ))}
            </div>
            <div>
              <div>
                <h2>{priceRegular}</h2>
                <PrimaryButton />
                <HeartButton
                  selected={isFavourite}
                  onClick={handleFavouriteClick}
                />
              </div>
              <div>
                <div>
                  <span>Screen</span>
                  <span>{screen}</span>
                </div>
                <div>
                  <span>Resolution</span>
                  <span>{resolution}</span>
                </div>
                <div>
                  <span>Processor</span>
                  <span>{processor}</span>
                </div>
                <div>
                  <span>RAM</span>
                  <span>{ram}</span>
                </div>
              </div>
            </div>
          </div>
          <div>{product.id}</div>
        </div>

        <div>
          <div>
            <h3>About</h3>
            {description.map((desc, index) => (
              <div key={index}>
                <h4>{desc.title}</h4>
                <span>{desc.text}</span>
              </div>
            ))}
          </div>

          <div>
            <h3>Tech specs</h3>
            <div>
              <div>
                <span>Screen</span>
                <span>{screen}</span>
              </div>
              <div>
                <span>Resolution</span>
                <span>{resolution}</span>
              </div>
              <div>
                <span>Processor</span>
                <span>{processor}</span>
              </div>
              <div>
                <span>RAM</span>
                <span>{ram}</span>
              </div>
              <div>
                <span>Built in memory</span>
                <span>{capacity}</span>
              </div>
              <div>
                <span>Camera</span>
                <span>{camera}</span>
              </div>
              <div>
                <span>Zoom</span>
                <span>{zoom}</span>
              </div>
              <div>
                <span>Cell</span>
                <span>{cell}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <HotPricesCarousel data={products} />
        </div>
      </div>
    </>
  );
};

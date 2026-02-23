export interface ProductDetails {
  id: string;
  category: ProductCategory;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  selectedCapacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  selectedColor: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

interface Description {
  title: string;
  text: string[];
}

export interface Product {
  id: number;
  category: ProductCategory;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  selectedCapacity: string;
  selectedColor: string;
  ram: string;
  year: number;
  image: string;
}

export type ProductCategory = 'phones' | 'tablets' | 'accessories';

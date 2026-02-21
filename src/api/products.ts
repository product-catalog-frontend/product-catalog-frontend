import { supabase } from '../services/supabaseClient';
import type { Product } from '../types/Product/Product';

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Error fetching master list:', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const getBrandNewProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('year', 2022)
    .order('price', { ascending: false });

  if (error) {
    console.error('Error fetching Brand New Products', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const getDiscountProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*').not('fullPrice', 'is', null);

  if (error) {
    console.error('Error fetching master list:', error);
    throw new Error(error.message);
  }

  const discounted = (data || [])
    .filter((product) => product.fullPrice && product.fullPrice > product.price)
    .sort((a, b) => {
      const discountA = a.fullPrice - a.price;
      const discountB = b.fullPrice - b.price;
      return discountB - discountA;
    });

  return discounted || [];
};

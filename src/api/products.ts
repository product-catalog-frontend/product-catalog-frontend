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

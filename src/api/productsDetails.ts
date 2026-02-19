import { supabase } from '../services/supabaseClient';
import type { ProductCategory, ProductDetails } from '../types/Product/Product';

export const getProductDescription = async (
  itemId: string,
  category: ProductCategory,
): Promise<ProductDetails> => {
  const { data, error } = await supabase
    .from(category)
    .select('*')
    .eq('itemId', itemId)
    .single<ProductDetails>();

  if (error) {
    console.error(`Failed to fetch ${itemId} from ${category}:`, error);
    throw new Error(error.message);
  }

  return data;
};

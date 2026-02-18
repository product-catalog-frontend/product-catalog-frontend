import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import type { Product } from '../../types/Product/Product';

import {
  NumberButton,
  ChevronButton,
  RoundButton,
  HeartButton,
  PrimaryButton,
  ArrowButton,
} from '../../components/common/Buttons';

export const HomePage = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);

  const navigate = useNavigate();

  const handleFetch = async () => {
    setLoading(true);
    try {
      const { data: products, error } = await supabase.from('products').select('*');

      if (error) throw error;

      setData(products || []);
    } catch (error) {
      console.error('Помилка фетчу:', error);
      alert('Не вдалося завантажити дані');
    } finally {
      setLoading(false);
    }
  };

  const featuredProduct = data.length > 22 ? data[22] : data[0];

  const onFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="p-5 max-w-[1200px] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>

      <div className="mb-10 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-300">
        <button
          onClick={handleFetch}
          disabled={loading}
          className="px-6 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition disabled:opacity-50"
        >
          {loading ? 'Завантаження...' : 'Перевірити зв’язок з базою'}
        </button>

        {data.length > 0 && (
          <div className="mt-6 flex flex-col md:flex-row gap-6">
            <div className="w-full max-w-[300px]">
              <h3 className="mb-2 text-sm text-gray-500 italic font-medium">
                Тестовий ProductCard (index: {data.length > 22 ? 22 : 0}):
              </h3>
              <ProductCard
                product={featuredProduct}
                isFavorite={isFavorite}
                onFavoriteClick={onFavoriteClick}
              />
            </div>

            <div className="flex-1">
              <h3 className="font-medium mb-2">Raw JSON Data:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-md text-xs h-[300px] overflow-auto shadow-inner">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>

      <section className="p-6 border border-gray-200 rounded-lg max-w-[700px] bg-white shadow-sm">
        <h2 className="text-xl font-semibold border-b pb-2 mb-6">UI Components Library</h2>

        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              NumberButton (Pagination)
            </h3>
            <div className="flex gap-2 items-center">
              {[1, 2, 3].map((num) => (
                <NumberButton
                  key={num}
                  number={num}
                  selected={currentPage === num}
                  onClick={() => setCurrentPage(num)}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              ChevronButton
            </h3>
            <div className="flex gap-2 items-center">
              <ChevronButton
                direction="left"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              />
              <ChevronButton
                direction="right"
                onClick={() => setCurrentPage((p) => p + 1)}
              />
              <ChevronButton
                direction="right"
                disabled
              />
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                RoundButton
              </h3>
              <RoundButton
                selected={isColorSelected}
                onClick={() => setIsColorSelected(!isColorSelected)}
              />
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                HeartButton
              </h3>
              <HeartButton
                selected={isFavorite}
                onClick={() => setIsFavorite(!isFavorite)}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Primary & Arrow Buttons
            </h3>
            <div className="flex gap-4 items-center flex-wrap">
              <PrimaryButton />
              <ArrowButton
                text="Back to Catalog"
                onClick={() => navigate(-1)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

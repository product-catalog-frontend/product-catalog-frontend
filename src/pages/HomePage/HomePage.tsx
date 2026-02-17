import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';
import {
  NumberButton,
  ChevronButton,
  RoundButton,
  HeartButton,
  PrimaryButton,
  ArrowButton,
} from '../../components/common/Buttons';

export const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);

  const navigate = useNavigate();

  const handleFetch = async () => {
    setLoading(true);
    // Робимо запит до таблиці products
    const { data: products, error } = await supabase.from('products').select('*').limit(5);

    if (error) {
      console.error('Помилка фетчу:', error);
    } else {
      console.log('Дані отримано:', products);
      setData(products);
    }
    setLoading(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Home Page</h1>

      <button
        onClick={handleFetch}
        disabled={loading}
        className="px-5 py-2 border rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Завантаження...' : 'Перевірити зв’язок з базою'}
      </button>

      <section className="mt-8 p-6 border border-gray-200 rounded-lg max-w-[600px]">
        <h2 className="mb-4 text-lg font-medium">NumberButton</h2>

        <div className="flex gap-2 items-center mb-6">
          <NumberButton
            number={1}
            selected={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          />
          <NumberButton
            number={2}
            selected={currentPage === 2}
            onClick={() => setCurrentPage(2)}
          />
          <NumberButton
            number={3}
            selected={currentPage === 3}
            onClick={() => setCurrentPage(3)}
          />
        </div>

        <h2 className="mb-4 text-lg font-medium">ChevronButton</h2>

        <div className="flex gap-2 items-center mb-6">
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

        <h2 className="mb-4 text-lg font-medium">RoundButton</h2>

        <div className="flex gap-2 items-center mb-6">
          <RoundButton
            selected={isColorSelected}
            onClick={() => setIsColorSelected(!isColorSelected)}
          />
        </div>

        <h2 className="mb-4 text-lg font-medium">HeartButton</h2>

        <div className="flex gap-2 items-center mb-6">
          <HeartButton
            selected={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>

        <h2 className="mb-4 text-lg font-medium">PrimaryButton</h2>

        <div className="flex gap-2 items-center mb-6 flex-wrap">
          <PrimaryButton />
        </div>

        <h2 className="mb-4 text-lg font-medium">ArrowButton</h2>

        <div className="flex gap-4 items-center">
          <ArrowButton
            text="Default"
            onClick={() => {}}
          />

          <ArrowButton
            text="Back"
            onClick={() => navigate(-1)}
          />
        </div>
      </section>

      {data && (
        <div className="mt-5 text-left">
          <h3 className="font-medium mb-2">Результат:</h3>

          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

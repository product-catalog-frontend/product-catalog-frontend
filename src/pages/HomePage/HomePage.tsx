import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import {
  NumberButton,
  ChevronButton,
  RoundButton,
  HeartButton,
  PrimaryButton,
  ArrowButton,
} from '../../components/common/buttons';

export const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState(false);

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
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>

      <button
        onClick={handleFetch}
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? 'Завантаження...' : 'Перевірити зв’язок з базою'}
      </button>

      <section
        style={{
          marginTop: '32px',
          padding: '24px',
          border: '1px solid #eee',
          borderRadius: '8px',
          maxWidth: '600px',
        }}
      >
        <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>NumberButton</h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
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

        <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>ChevronButton</h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
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

        <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>RoundButton</h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
          <RoundButton
            selected={isColorSelected}
            onClick={() => setIsColorSelected(!isColorSelected)}
          />
        </div>

        <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>HeartButton</h2>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
          <HeartButton
            selected={isFavorite}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>

        <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>PrimaryButton</h2>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          <PrimaryButton onClick={() => {}} />
        </div>

        <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>ArrowButton</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <ArrowButton
            text="Default"
            onClick={() => {}}
          />
          <ArrowButton
            text="Hover"
            onClick={() => window.history.back()}
          />
        </div>
      </section>

      {data && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h3>Результат:</h3>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

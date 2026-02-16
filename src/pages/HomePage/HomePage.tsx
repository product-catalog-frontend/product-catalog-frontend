import { useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    // Робимо запит до таблиці products
    const { data: products, error } = await supabase.from('products').select('*');

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
      {data && data.length > 0 && <ProductCard product={data[22]} />}
      <h1>Home Page</h1>

      <button
        onClick={handleFetch}
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? 'Завантаження...' : 'Перевірити зв’язок з базою'}
      </button>

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

import useFetch from '../../api/getCatalog';
import React from 'react';
import { CardPizza } from '../../components/Card/CardPizza';

import './Catalog.css';

const Catalog = ({ setModalIsOpen, setPizzaModal }) => {
  const { data, loading, error } = useFetch();

  if (loading) {
    return <h2>Загрузка каталога...</h2>;
  }

  if (error) {
    return <h2>Ошибка загрузки каталога: {error.message}</h2>;
  }

  if (data === null || !data.catalog) {
    return <h2>Нет данных</h2>;
  }

  return (
    <main>
      <ul className="catalog_list">
        {data.catalog.map((item) => (
          <CardPizza item={item} setModalIsOpen={setModalIsOpen} setPizzaModal={setPizzaModal} />
        ))}
      </ul>
    </main>
  );
};

export { Catalog };

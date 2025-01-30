import useFetch from '../../api/getCatalog';
import React from 'react';
import { CardPizza } from '../../components/Card/CardPizza';

import './Catalog.css';

const Catalog = ({ setModalIsOpen, setPizzaModal }) => {
  const { data } = useFetch();

  if (data !== null) {
    return (
      <main>
        <ul className="catalog_list">
          {data.catalog.map((item) => (
            <CardPizza item={item} setModalIsOpen={setModalIsOpen} setPizzaModal={setPizzaModal} />
          ))}
        </ul>
      </main>
    );
  }
  return <h2>Загрузка каталога</h2>;
};

export { Catalog };

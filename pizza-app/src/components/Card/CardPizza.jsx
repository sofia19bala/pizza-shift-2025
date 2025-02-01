import React from 'react';
import { URL } from '../../constant/constant';
import './CardPizza.css';

export const CardPizza = ({ item, setModalIsOpen, setPizzaModal }) => {
  const openModal = (item) => {
    setPizzaModal(item);
    setModalIsOpen(true);
  };

  const { id, img, name, description, sizes } = item;

  return (
    <li key={id} className="catalog_item">
      <img
        className="pizza_img"
        src={URL + `${img}`}
        alt={img}
        width="220px"
        height="220px"
        title={name}
      />
      <h3 className="pizza_name">{name}</h3>
      <p className="pizza_desc">{description}</p>

      <div className="wrap">
        <p className="pizza_cost">От {sizes[0].price} Р</p>
        <button
          className="btn_choice"
          onClick={() => openModal({item})}
        >
          Выбрать
        </button>
      </div>
    </li>
  );
};

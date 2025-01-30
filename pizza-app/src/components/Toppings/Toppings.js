import React, { useState } from 'react';
import "./Toppings.css";
import { URL } from '../../constant/constant';

const Toppings = ({ topKey, item, getToppings }) => {
  const [activeTopping, setActiveTopping] = useState(false);

  const {img, name, cost} = item;

  return (
    <li
      className={activeTopping ? 'topping_item topping_item_active' : 'topping_item'}
      key={topKey}
      onClick={() => {
        getToppings(item);
        setActiveTopping(!activeTopping);
      }}
    >
      <img className='topping_img'
        src={URL+`${img}`}
        alt={name}
        width="108px"
        height="108px"
      ></img>
      <p className="topping_name">{name}</p>
      <p className="topping_cost">{cost} Р</p>
    </li>
  );
};

export { Toppings };

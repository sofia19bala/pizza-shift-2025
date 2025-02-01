import React, { useState } from 'react';
import { URL } from '../../constant/constant';
import "./Toppings.css";

const Toppings = ({ topKey, toppings, getToppings }) => {
  const [activeTopping, setActiveTopping] = useState(false);

  const {img, name, cost} = toppings;

  return (
    <li
      className={activeTopping ? 'topping_item topping_item_active' : 'topping_item'}
      key={topKey}
      onClick={() => {
        getToppings(toppings);
        setActiveTopping(!activeTopping);
      }}
    >
      <img className='topping_img'
        src={URL+`${img}`}
        alt={name}
        width="108px"
        height="108px"
      />
      <p className="topping_name">{name}</p>
      <p className="topping_cost">{cost} Р</p>
    </li>
  );
};

export { Toppings };

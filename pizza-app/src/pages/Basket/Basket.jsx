import { useState, useEffect } from 'react';
import { PizzaInBasketCard } from '../../components/PizzaInBasketCard/PizzaInBasketCard';

import "./Basket.css";

const Basket = ({ basketData, setBasketData}) => {
  const [costAllPizzas, setCostAllPizzas] = useState(0);

  const calcCost = () => {
    let sum = 0;
    basketData.forEach(item => {
        sum += (item.cost + item.costToppings) * item.count;
    })
    setCostAllPizzas(sum);
  };

  useEffect(() => {
      calcCost();
  }, []);

  return (
    <main className='basket_container'>
      <h2 className='header_basket'>Корзина</h2>

      <ul className='pizza_in_bascet_list'>
      {basketData.map((item, i) => (
        <PizzaInBasketCard 
          key={i}
          id={i}
          dataPizzaItem={item} 
          basketData={basketData} 
          setBasketData={setBasketData} 
          updateBasket={calcCost}
        />
        ))}
      </ul>

      <hr className='hr_line'></hr>

      <div className={costAllPizzas === 0 ? 'wrap_cost_order hidden' : 'wrap_cost_order'}>
        <h2 className='cost_all_pizzas'>Стоимость заказа: <span>{costAllPizzas}</span></h2>
        <button className='btn_arrange'>Оформить заказ</button>
      </div>
    </main>
  );
};

export { Basket };

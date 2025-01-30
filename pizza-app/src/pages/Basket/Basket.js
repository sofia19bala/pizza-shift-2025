import { PizzaInBasket } from '../../components/PizzaInBasket/PizzaInBasket';

const Basket = ({ data, basketData }) => {
  return (
    <main>
      <h2>Корзина</h2>
      <PizzaInBasket data={data} basketData={basketData} />
    </main>
  );
};

export { Basket };

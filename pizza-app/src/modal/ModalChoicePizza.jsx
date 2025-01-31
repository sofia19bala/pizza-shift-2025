import React, { useState } from 'react';
import { Toppings } from '../components/Toppings/Toppings';
import { SizePizza } from '../components/SizePizza/SizePizza';
import { URL } from '../constant/constant';
import './ModalChoicePizza.css';

const ModalChoicePizza = ({ isOpen, setOpen, pizzaModalData, basketData, setBasketData }) => {
  const [sizePizzaId, setSizePizzaId] = useState(0);
  const [sizeNumber, setSizeNumber] = useState(23);
  const [allToppings, setAllToppings] = useState([]);

  if (!isOpen) return null;

  const getToppings = (item) => {
    const indx = allToppings.indexOf(item);

    if (indx === -1) {
      allToppings.push(item);
      setAllToppings(allToppings);
    } else {
      allToppings.splice(indx, 1);
    }
  };

  const closeChoicePizza = () => {
    setOpen(false);
    setSizePizzaId(0);
    setAllToppings([]);
    setSizeNumber(23);
  };

  const getCostAllToppings = (toppings) => {
    let cost = 0;
    toppings.forEach(topping => {
      cost += topping.cost;
    })
    return cost;
  };

  const { img, name, description, sizes, toppings } = pizzaModalData.item;
  return (
    <div className="pizza_modal_bg active">
      <div className="modal">
        <button
          className="btn_close"
          onClick={() => closeChoicePizza()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.085 3.53002C20.7923 3.23729 20.3177 3.23728 20.025 3.52998L12.306 11.248L4.5965 3.53663C4.30356 3.24362 3.82852 3.2437 3.53569 3.53681C3.2431 3.82968 3.24318 4.30424 3.53587 4.597L11.246 12.309L3.52997 20.025C3.23719 20.3178 3.23697 20.7924 3.52947 21.0855C3.82238 21.3789 4.29781 21.3791 4.59097 21.0859L12.306 13.369L20.032 21.094C20.3247 21.3867 20.7993 21.3867 21.092 21.094C21.3847 20.8013 21.3847 20.3267 21.092 20.034L13.368 12.309L21.0851 4.59005C21.3778 4.2973 21.3777 3.82273 21.085 3.53002Z"
              fill="#CED2DA"
            />
          </svg>
        </button>

        <div className="show_pizza">
          <img
            src={URL+`${img}`}
            alt={name}
            width="220px"
            height="220px"
          />

          <div className="choice_pizza">
            <div className="container">
              <div className="choice_pizza_title">
                <h2 className="pizza_name">{name}</h2>
                <p>{sizeNumber} см, традиционное тесто</p>
                <p>{description}</p>
              </div>

              <ul className="size_pizza">
                {sizes.map((item, indx) => (
                  <SizePizza 
                    item={item} 
                    indx={indx} 
                    sizePizzaId={sizePizzaId} 
                    setSizePizzaId={setSizePizzaId} 
                    setSizeNumber={setSizeNumber}
                  />
                ))}
              </ul>

              <div className="toppings">
                <p className="toppings_title">Добавить по вкусу</p>

                <ul className="toppings_list">
                  {toppings.map((item, i) => (
                    <Toppings 
                      topKey={i} 
                      toppings={item} 
                      getToppings={getToppings} 
                    />
                  ))}
                </ul>
              </div>
            </div>
            <button
              className="btn_add_basket btn_choice"
              onClick={() => {
                let allDataPizza = basketData;

                allDataPizza.push({
                  name: name,
                  img: URL+`${img}`,
                  cost: sizes[sizePizzaId].price,
                  sizeWord: sizes[sizePizzaId].name,
                  size: sizeNumber,
                  allToppings: allToppings,
                  count: 1,
                  costToppings: getCostAllToppings(allToppings)
                });

                setBasketData(allDataPizza);
                closeChoicePizza();
              }}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalChoicePizza };

const PizzaInBasket = ({ basketData }) => {
  return (
    <div>
      <img></img>
      <h4></h4>
      <p></p>
      <div></div>
      <p>Изменить</p>
      <p></p>
      <button>close</button>
      <ul className="toppings_list">
        {basketData.map((item, i) => (
          <li>
            <p>{item.cost}</p>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PizzaInBasket };

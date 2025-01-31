import "./PizzaInBasketCard.css";

const PizzaInBasketCard = ({dataPizzaItem, basketData, setBasketData, updateBasket, id}) => {
  const {count, name, img, sizeWord, size,cost,costToppings, allToppings} = dataPizzaItem;

  const changeCount = (countChange) => {
    if (countChange < 1) {
        countChange = 1;
    }
    let temp = basketData;
    temp[id].count = countChange;
    setBasketData(temp);
    updateBasket();
  }
  
  const getAllToppingsString = (top) => {
    if (top.length === 0){
      return ;
    }
    return top.reduce(function(acc,allToppings){return acc + allToppings.name + ", "},"+ ").replace(/,\s*$/, '');
  };

  const deletePizza = () => {
    let temp = basketData; 
    temp.splice(id,1); 
    setBasketData(temp); 
    updateBasket(); 
  };

  return(
    <li className="pizza_in_basket_item">        
      <img className="pizza_in_basket_img" src={img} alt=""></img>
      <h4 className="pizza_in_basket_name">{name}</h4>
      <p className="pizza_in_basket_desc">{sizeWord} {size} см, традиционное тесто {getAllToppingsString(allToppings)}</p>
      
      <div className="wrap_btn_count">
        <button className="bt_minus" onClick={() => changeCount(count - 1)}>-</button>
        <span>{count}</span>
        <button className="bt_plus" onClick={() => changeCount(count + 1)}>+</button>
      </div>

      <span className="btn_change">Изменить</span>
      <span className="pizza_in_basket_cost">{count * (cost + costToppings)} p</span>
      
      <p className="btn_delete" onClick={() => deletePizza()}>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8096 0.964586C17.5169 0.671861 17.0423 0.671847 16.7496 0.964554L9.03061 8.68257L1.32111 0.971199C1.02817 0.678192 0.553129 0.678275 0.260295 0.971385C-0.032293 1.26425 -0.0322099 1.73881 0.260481 2.03157L7.97061 9.74357L0.254578 17.4596C-0.038196 17.7524 -0.0384202 18.227 0.254078 18.52C0.546991 18.8135 1.02242 18.8137 1.31558 18.5205L9.03061 10.8036L16.7566 18.5286C17.0493 18.8213 17.5239 18.8213 17.8166 18.5286C18.1093 18.2359 18.1093 17.7613 17.8166 17.4685L10.0926 9.74357L17.8097 2.02462C18.1024 1.73187 18.1023 1.2573 17.8096 0.964586Z" fill="#141C24"/>
          </svg>
      </p>
    </li>

  )
}
export {PizzaInBasketCard};
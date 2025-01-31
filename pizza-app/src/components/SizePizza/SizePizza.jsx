import { SIZE_NUMBER } from "../../constant/constant";
import "./SizePizza.css";

const SizePizza = ({item, indx, sizePizzaId, setSizePizzaId, setSizeNumber}) => {
  const getSizeNumber = () => {
    let sizeNow = item.name;
    setSizeNumber(SIZE_NUMBER[sizeNow]);
  };

  return(
    <li
      key={indx}
      className={sizePizzaId !== indx ? 'size_pizza' : 'size_pizza active_size_pizza'}
      onClick={() => {
        setSizePizzaId(indx);
        getSizeNumber();
      }}
    >
      {item.name}
    </li>
  );
};

export {SizePizza};
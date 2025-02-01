import { SIZE_NUMBER } from "../../constant/constant";
import "./SizePizza.css";

const SizePizza = ({item, index, sizePizzaId, setSizePizzaId, setSizeNumber}) => {
  const getSizeNumber = () => {
    let sizeNow = item.name;
    setSizeNumber(SIZE_NUMBER[sizeNow]);
  };

  return(
    <li
      key={index}
      className={sizePizzaId !== index ? 'size_pizza' : 'size_pizza active_size_pizza'}
      onClick={() => {
        setSizePizzaId(index);
        getSizeNumber();
      }}
    >
      {item.name}
    </li>
  );
};

export {SizePizza};
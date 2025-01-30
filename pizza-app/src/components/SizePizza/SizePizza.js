import { SIZE_NUMBER } from "../../constant/constant";
import "./SizePizza.css";

const SizePizza = ({item, indx, data, sizePizza, setSizePizza, setSizeNumber}) => {
  const getSizeNumber = (indx) => {
    let sizeNow = data.item.sizes[indx].name;
    setSizeNumber(SIZE_NUMBER[sizeNow]);
  };

  return(
    <li
      key={indx}
      className={sizePizza !== indx ? 'size_pizza' : 'size_pizza active_size_pizza'}
      onClick={() => {
        setSizePizza(indx);
        getSizeNumber(indx);
      }}
    >
      {item.name}
    </li>
  );
};

export {SizePizza};
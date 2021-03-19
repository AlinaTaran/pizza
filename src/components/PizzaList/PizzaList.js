import { useState } from "react";

import allPizzas from "../../allPizzas";
import Order from "../Order";
import Statistics from "../Statistics";

import s from "./PizzaList.module.css";

const PizzaList = () => {
  const [pizzas, setPizzas] = useState(allPizzas);
  const [order, setOrder] = useState([]);

  function handleOrder(pizza) {
    setOrder((prevState) => [pizza[0], ...prevState]);
  }

  return (
    <>
      <div className={s.container}>
        <p className={s.pizza__title}>Піци:</p>
        <ul>
          {Object.entries(pizzas).map((item, idx) => (
            <li key={idx} className={s.listItem}>
              {item[0]}: <span>{Object.keys(item[1]).join(",")}</span>
              <button onClick={() => handleOrder(item)}>Замовити</button>
            </li>
          ))}
        </ul>
        <Order order={order} />
        <Statistics order={order} />
      </div>
    </>
  );
};

export default PizzaList;

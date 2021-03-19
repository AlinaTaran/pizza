import s from "./Order.module.css";

const Order = ({ order }) => {
  return (
    <div>
      <p className={s.order}>Замовлення</p>
      <ul>
        {order.map((pizza, idx) => {
          return <li key={idx}>{pizza}</li>;
        })}
      </ul>
    </div>
  );
};

export default Order;

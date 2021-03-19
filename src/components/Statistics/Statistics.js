import s from "./Statistics.module.css";

const Statistics = ({ order }) => {
  // function populare() {
  //   order.reduce(
  //     (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  //     []
  //   );
  // }

  return (
    <div>
      <p className={s.popular}>Найпопулярніші піци</p>
      <ul>
        {order.map((pizza, idx) => {
          return <li key={idx}>{pizza}</li>;
        })}
      </ul>
    </div>
  );
};

export default Statistics;

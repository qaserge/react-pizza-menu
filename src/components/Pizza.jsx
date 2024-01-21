import "./Pizza.css";

export default function Pizza({ pizza }) {
  //   const { pizza } = props;

  return (
    <li className={`Pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} width={"233px"} />
      <h1>{pizza.name}</h1>
      <p>{pizza.ingredients}</p>
      <p>{pizza.soldOut ? "Sold Out" : "Price:" + pizza.price}</p>
    </li>
  );
}

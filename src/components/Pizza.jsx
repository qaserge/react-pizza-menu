import "./Pizza.css";

export default function Pizza(props) {
  const { pizza } = props;

  return (
    <div className="Pizza">
      <img src={pizza.photoName} alt={pizza.name} width={"233px"} />
      <h1>{pizza.name}</h1>
      <p>{pizza.ingredients}</p>
      <p>Price: ${pizza.price}</p>
    </div>
  );
}

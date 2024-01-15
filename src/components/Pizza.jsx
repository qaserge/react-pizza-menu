import pizzaData from "../data.js";

export default function Pizza() {
  return (
    <div>
      {pizzaData.map((pizza, index) => (
        <div key={index}>
          <h1>{pizza.name}</h1>
          <p>{pizza.ingredients}</p>
          <p>Price: ${pizza.price}</p>
          <img src={pizza.photoName} alt={pizza.name} width={"200px"} />
        </div>
      ))}
    </div>
  );
}

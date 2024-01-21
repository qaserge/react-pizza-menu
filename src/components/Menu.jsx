import Pizza from "./Pizza";
import pizzaData from "../data.js";

export default function Menu() {
  return (
    <ul className="Menu">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} key={pizza.name} />
      ))}
    </ul>
  );
}

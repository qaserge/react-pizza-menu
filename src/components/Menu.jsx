import Pizza from "./Pizza";
import pizzaData from "../data.js";

export default function Menu() {
  return (
    <div className="Menu">
      {pizzaData.map((pizza) => (
        <Pizza pizza={pizza} />
      ))}
    </div>
  );
}

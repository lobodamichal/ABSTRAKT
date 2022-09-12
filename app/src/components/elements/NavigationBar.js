import { Link } from "react-router-dom";

const NavigationBar = () => {
    const display = {
        "display": "inline-block"
    }

  return (
    <div>
      <button style={display}>Abstrakt</button>
      <div style={display}>
        <Link to={"/home"} key={1}>
          home/
        </Link>
        <Link to={"/all-products"} key={2}>
          products/
        </Link>
        <Link to={"/collections"} key={3}>
          collections/
        </Link>
        <Link to={"/cart"} key={4}>
          cart/
        </Link>
        <Link to={"/about"} key={5}>
          about
        </Link>
      </div>
      <button style={display}>user</button>
      <button style={display}>cart</button>
    </div>
  );
};

export default NavigationBar;

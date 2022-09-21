import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const NavigationBar = () => {
  const dispatch = useDispatch()
    const display = {
        "display": "inline-block"
    }

    const userOnClickHandler = () => {
      dispatch(uiActions.setShowModal())
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
      <button style={display} onClick={userOnClickHandler}>user</button>
      <button style={display}>cart</button>
    </div>
  );
};

export default NavigationBar;

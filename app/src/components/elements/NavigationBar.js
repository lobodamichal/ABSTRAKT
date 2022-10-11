import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLogged = useSelector((state) => state.ui.isLogged);
  const display = {
    display: "inline-block",
  };

  const userOnClickHandler = () => {
    dispatch(uiActions.setShowModal());
  };

  const cartLinkClickHandler = (event) => {
    if (!isLogged) {
      event.preventDefault();
      dispatch(uiActions.setShowModal());
    }
  };

  const cartIconClickHandler = () => {
    !isLogged ? dispatch(uiActions.setShowModal()) : navigate("/cart");
  };

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

        <Link onClick={cartLinkClickHandler} to={"/cart"} key={4}>
          cart/
        </Link>

        <Link to={"/about"} key={5}>
          about
        </Link>
      </div>
      <button style={display} onClick={userOnClickHandler}>
        user
      </button>
      <button style={display} onClick={cartIconClickHandler}>
        cart
      </button>
    </div>
  );
};

export default NavigationBar;

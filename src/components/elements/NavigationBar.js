import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.ui.isLogged);

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

  const navbarMenu = (
    <>
      <Link to={"/home"} key={1} className="navbar__menu__link">
        home
      </Link>
      <p className="navbar__menu__slash">/</p>
      <Link to={"/all-products"} key={2} className="navbar__menu__link">
        products
      </Link>
      <p className="navbar__menu__slash">/</p>
      <Link to={"/collections"} key={3} className="navbar__menu__link">
        collections
      </Link>
      <p className="navbar__menu__slash">/</p>
      <Link
        onClick={cartLinkClickHandler}
        to={"/cart"}
        key={4}
        className="navbar__menu__link"
      >
        cart
      </Link>
      <p className="navbar__menu__slash">/</p>
      <Link to={"/about"} key={5} className="navbar__menu__link">
        about
      </Link>
    </>
  );

  return (
    <>
      <div className="navbar">
        <button className="navbar__logo txt-major txt-major--logo ">
          Abstrakt
        </button>
        <div className="navbar__menu navbar__menu--desktop txt-major txt-major--menu">
          {navbarMenu}
        </div>
        <div className="navbar__buttons">
          <button
            className="navbar__button navbar__button--user"
            onClick={userOnClickHandler}
          />
          <button
            className="navbar__button navbar__button--cart"
            onClick={cartIconClickHandler}
          />
        </div>
      </div>
      <div className="navbar navbar__menu navbar__menu--mobile txt-major txt-major--menu">
        {navbarMenu}
      </div>
    </>
  );
};

export default NavigationBar;

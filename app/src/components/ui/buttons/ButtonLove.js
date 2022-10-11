import useDetails from "../../../hooks/use-details";
import { useSelector } from "react-redux";
import { useState } from "react";

const ButtonImage = (props) => {
  const { updateLovedProducts } = useDetails();
  const lovedProducts = useSelector(
    (state) => state.user.userData.lovedProducts
  );
  const email = useSelector((state) => state.user.userData.email);
  const isLogged = useSelector((state) => state.ui.isLogged);

  const setInitialLoved = () => {
    if (lovedProducts) {
      return lovedProducts.includes(props.id);
    } else {
      return false;
    }
  };

  const [loved, setLoved] = useState(setInitialLoved());

  const onClickHandler = (event) => {
    event.preventDefault();
    updateLovedProducts(email, props.id);
    setLoved(!loved);
  };

  return (
    <button disabled={!isLogged} onClick={onClickHandler}>
      {loved ? "loved" : "love"}
    </button>
  );
};

export default ButtonImage;

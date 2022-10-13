import useDetails from "../../../hooks/use-details";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { useState } from "react";

const ButtonImage = (props) => {
  const { updateLovedProducts } = useDetails();
  const dispatch = useDispatch();
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
    if (isLogged) {
      updateLovedProducts(props.id);
      setLoved(!loved);
    } else {
      dispatch(uiActions.setShowModal());
    }
  };

  return <button onClick={onClickHandler}>{loved ? "loved" : "love"}</button>;
};

export default ButtonImage;

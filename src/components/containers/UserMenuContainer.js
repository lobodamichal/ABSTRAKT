import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ButtonReturn from "../ui/buttons/ButtonReturn";
import ButtonMain from "../ui/buttons/ButtonMain";

const UserMenuContainer = () => {
  const dispatch = useDispatch();

  const lovedHandler = () => {
    console.log("redirect");
  };

  const ordersHandler = () => {
    dispatch(uiActions.setModalContent("orders"));
  };

  const detailsHandler = () => {
    dispatch(uiActions.setModalContent("details"));
  };

  const logoutHandler = () => {
    dispatch(uiActions.setIsLogged(false));
  };

  return (
    <div className="modal__content">
      <h1 className="txt txt--header txt--header--big">Welcome!</h1>
      <ButtonMain onClickHandler={lovedHandler}>loved products</ButtonMain>
      <ButtonMain onClickHandler={ordersHandler}>your orders</ButtonMain>
      <ButtonMain onClickHandler={detailsHandler}>account details</ButtonMain>
      <ButtonMain onClickHandler={logoutHandler}>logout</ButtonMain>
      <ButtonReturn path={false} />
    </div>
  );
};

export default UserMenuContainer;

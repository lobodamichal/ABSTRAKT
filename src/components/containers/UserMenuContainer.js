import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ButtonReturn from "../ui/buttons/ButtonReturn";

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
    dispatch(uiActions.setIsLogged(false))
  }

  return (
    <>
      <h1>Welcome!</h1>
      <button onClick={lovedHandler}>loved products</button>
      <button onClick={ordersHandler}>your orders</button>
      <button onClick={detailsHandler}>account details</button>
      <ButtonReturn path={false} />
      <button onClick={logoutHandler}>logout</button>
    </>
  );
};

export default UserMenuContainer;

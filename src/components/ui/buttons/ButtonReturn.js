import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

const ButtonReturn = (props) => {
  const dispatch = useDispatch();
  const returnHandler = () => {
    if (props.path) dispatch(uiActions.setModalContent(props.path));
    else dispatch(uiActions.setShowModal());
  };

  return <button onClick={returnHandler}>return</button>;
};

export default ButtonReturn;

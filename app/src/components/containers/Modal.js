import { useSelector } from "react-redux";
import AuthContainer from "./AuthContainer";
import UserMenuContainer from "./UserMenuContainer";

const Modal = () => {
  const showModal = useSelector((state) => state.ui.showModal);
  const showAuth = useSelector((state) => !state.user.isLogged);
  const modalContent = useSelector((state) => state.user.modalContent);

  let content;
  if (showAuth) {
    content = <AuthContainer />;
  } else {
    switch (modalContent) {
      case "menu":
        content = <UserMenuContainer />;
        break;
      case "details":
        break
      case "orders":
        break
      default:
        content = <UserMenuContainer />;
        break;
    }
  }

  return showModal && content;
};

export default Modal;

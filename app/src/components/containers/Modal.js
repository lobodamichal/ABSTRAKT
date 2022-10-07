import { useSelector } from "react-redux";
import AuthContainer from "./AuthContainer";
import UserMenuContainer from "./UserMenuContainer";
import UserDetailsContainer from "./UserDetailsContainer";

const Modal = () => {
  console.log('Modal rerender')
  const showModal = useSelector((state) => state.ui.showModal);
  const showAuth = useSelector((state) => !state.ui.isLogged);
  const modalContent = useSelector((state) => state.ui.modalContent);
  
  let content;
  
  if (showAuth) {
    content = <AuthContainer />;
  } else {
    switch (modalContent) {
      case "menu":
        content = <UserMenuContainer />;
        break;
      case "details":
        content = <UserDetailsContainer />
        break
      case "orders":
        break
    }
  }

  return showModal && content;
};

export default Modal;

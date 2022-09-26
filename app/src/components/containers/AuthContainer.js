import Input from "../elements/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useValidation from "../../hooks/use-validation";
import useAuthentication from "../../hooks/use-authentication";
import { uiActions } from "../../store/ui-slice";

const AuthContainer = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const getEmailValue = (input) => setEmail(input);
  const getPasswordValue = (input) => setPassword(input);
  const getRepeatPasswordValue = (input) => setRepeatPassword(input);

  const [register, setRegister] = useState(false);
  const { signUp, logIn } = useAuthentication();
  const dispatch = useDispatch();

  const {
    emailValidation,
    passwordValidation,
    repeatPasswordValidation,
    formValidation,
  } = useValidation(register);

  const registerTextContent = {
    header: "Register",
    paragraph: "Got an account already?",
    button: "Login here.",
  };
  const loginTextContent = {
    header: "Login",
    paragraph: "No account yet?",
    button: "Register here.",
  };

  const textContent = register ? registerTextContent : loginTextContent;

  const changeViewHandler = () => {
    setRegister((state) => !state);
  };

  const returnHandler = () => {
    dispatch(uiActions.setShowModal());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (register) {
      signUp(email, password)
    dispatch(uiActions.setModalContent("details"))
    } else {
      logIn(email, password);
      dispatch(uiActions.setModalContent("menu"))
    }
  };

  return (
    <>
      <h2>{textContent.header}</h2>
      <p>
        {textContent.paragraph}
        <span onClick={changeViewHandler}> {textContent.button}</span>
      </p>
      <form onSubmit={submitHandler}>
        <Input
          name="Email"
          type="email"
          inputValidation={emailValidation}
          formValidation={formValidation}
          getValue={getEmailValue}
        />
        <Input
          name="Password"
          type="text"
          inputValidation={passwordValidation}
          formValidation={formValidation}
          getValue={getPasswordValue}
        />
        {register && (
          <Input
            name="Repeat password"
            type="text"
            inputValidation={repeatPasswordValidation}
            formValidation={formValidation}
            getValue={getRepeatPasswordValue}
          />
        )}
        <button disabled={!formValidation()}>{textContent.header}</button>
      </form>
      <p onClick={returnHandler}>return</p>
    </>
  );
};

export default AuthContainer;

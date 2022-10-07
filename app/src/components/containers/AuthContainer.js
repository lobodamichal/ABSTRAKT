import Input from "../elements/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useValidation from "../../hooks/use-validation";
import useAuthentication from "../../hooks/use-authentication";
import { uiActions } from "../../store/ui-slice";

const AuthContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const getEmailValue = (input) => setEmail(input.value);
  const getPasswordValue = (input) => setPassword(input.value);
  const getRepeatPasswordValue = (input) => setRepeatPassword(input.value);

  const [register, setRegister] = useState(false);
  const { signUp, logIn } = useAuthentication();
  const dispatch = useDispatch();

  const {
    emailValidation,
    passwordValidation,
    repeatPasswordValidation,
    authFormValidation,
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
      signUp(email, password);
    } else {
      logIn(email, password);
    }
  };

  return (
    <section>
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
          formValidation={authFormValidation}
          getValue={getEmailValue}
        />
        <Input
          name="Password"
          type="text"
          inputValidation={passwordValidation}
          formValidation={authFormValidation}
          getValue={getPasswordValue}
        />
        {register && (
          <Input
            name="Repeat password"
            type="text"
            inputValidation={repeatPasswordValidation}
            formValidation={authFormValidation}
            getValue={getRepeatPasswordValue}
          />
        )}
        <button disabled={!authFormValidation()}>{textContent.header}</button>
      </form>
      <p onClick={returnHandler}>return</p>
    </section>
  );
};

export default AuthContainer;

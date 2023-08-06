import Input from "../elements/Input";
import { useState } from "react";
import useValidation from "../../hooks/use-validation";
import useAuthentication from "../../hooks/use-authentication";
import ButtonReturn from "../ui/buttons/ButtonReturn";
import ButtonMain from "../ui/buttons/ButtonMain";

const AuthContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const getEmailValue = (input) => setEmail(input);
  const getPasswordValue = (input) => setPassword(input);
  const getRepeatPasswordValue = (input) => setRepeatPassword(input);

  const [register, setRegister] = useState(false);
  const { signUp, logIn } = useAuthentication();

  const {
    emailValidation,
    passwordValidation,
    repeatPasswordValidation,
    authFormValidation,
  } = useValidation(register);

  const registerTextContent = {
    header: "Register",
    paragraph: "Got an account already? ",
    button: "Login here",
  };
  const loginTextContent = {
    header: "Login",
    paragraph: "No account yet? ",
    button: "Register here",
  };

  const textContent = register ? registerTextContent : loginTextContent;

  const changeViewHandler = () => {
    setRegister((state) => !state);
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
    <div className="modal__content">
      <div>
        <h2 className="txt txt--header txt--header--big">
          {textContent.header}
        </h2>
        <p className="txt txt--description txt--description--small">
          {textContent.paragraph}
          <span className="button--underline" onClick={changeViewHandler}>
            {" "}
            {textContent.button}
          </span>
          {"."}
        </p>
      </div>

      <form className="modal__content__form" onSubmit={submitHandler}>
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
        <ButtonMain
          className="modal__content__form__submit"
          disabled={!authFormValidation()}
        >
          {textContent.header}
        </ButtonMain>
      </form>
      <ButtonReturn path={false} />
    </div>
  );
};

export default AuthContainer;

import Modal from "../ui/Modal";
import { useState, useRef } from "react";

const AuthContainer = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const repeatPasswordInputRef = useRef();

  const [register, setRegister] = useState(false);

  const registerText = {
    header: "Register",
    paragraph: "Got an account already?",
    button: "Login here.",
  };
  const loginText = {
    header: "Login",
    paragraph: "No account yet?",
    button: "Register here.",
  };

  const text = register ? registerText : loginText;

  const changeViewHandler = () => {
    setRegister((state) => !state)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const enteredRepeatPassword = register ? repeatPasswordInputRef.current.value : null

    console.log({enteredEmail, enteredPassword, enteredRepeatPassword})

    if (register) {

    } else {

    }
  };

  return (
    <Modal>
      <h2>{text.header}</h2>
      <p>
        {text.paragraph}
        <span onClick={changeViewHandler}> {text.button}</span>
      </p>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="text" required ref={passwordInputRef} />
        </div>
        {register && (
          <div>
            <label htmlFor="repeatPassword">Repeat password</label>
            <input
              id="repeatPassword"
              type="text"
              required
              ref={repeatPasswordInputRef}
            />
          </div>
        )}
        <button onClick={submitHandler}>{text.header}</button>
      </form>
      <p>return</p>
    </Modal>
  );
};

export default AuthContainer;

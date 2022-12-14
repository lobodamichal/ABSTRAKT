import { useState } from "react";

const useValidation = (register) => {
  const emailRegEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
  const passwordRegEx = /.{8,}/gm;

  const [password, setPassword] = useState();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [repeatPasswordIsValid, setPepeatPasswordIsValid] = useState(false);

  const showMessage = (input, message) => {
    return input === undefined || input.trim().length === 0
      ? "Can not be empty."
      : message;
  };

  const emailValidation = (input) => {
    const check = emailRegEx.test(input);
    setEmailIsValid(check);
    return {
      check,
      message: showMessage(input, "Email is invalid."),
    };
  };

  const passwordValidation = (input) => {
    const check = input !== undefined && passwordRegEx.test(input);
    setPasswordIsValid(check);
    setPassword(input);
    return {
      check,
      message: showMessage(
        input,
        "Password must be at least 8 characters long."
      ),
    };
  };

  const repeatPasswordValidation = (input) => {
    const check = input !== undefined && input === password;
    setPepeatPasswordIsValid(check);
    return {
      check,
      message: showMessage(input, "Passwords must match."),
    };
  };

  const authFormValidation = () => {
    return register
      ? emailIsValid && passwordIsValid && repeatPasswordIsValid
      : emailIsValid && passwordIsValid;
  };

  const detailValidation = (input) => {
    const check = input !== ""
    return {
      check, 
      message: showMessage(input, "")
    }
  }

  const detailsFormValidation = (keys, values) => {    if (
      keys.length === 6 &&
      !values.includes("")
    ) {
      return true;
    } else return false;
  };

  return {
    emailValidation,
    passwordValidation,
    repeatPasswordValidation,
    detailValidation,
    detailsFormValidation,
    authFormValidation,
  };
};

export default useValidation;

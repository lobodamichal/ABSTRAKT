import { useState } from "react";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const { check, message } = props.inputValidation(enteredValue);
  props.formValidation()

  const showError = !check && isClicked;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsClicked(true);
    props.getValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        id={props.name}
        type={props.type}
        required
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {showError && <p>{message}</p>}
    </div>
  );
};

export default Input;

import { useState } from "react";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState(props.initialValue);
  const [isClicked, setIsClicked] = useState(false);

  const { check, message } = props.inputValidation(enteredValue);

  const showError = !check && isClicked;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    props.getValue(event.target);
  };

  const onBlurHandler = () => {
    setIsClicked(true);
    props.formValidation()
  };

  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        value={enteredValue}
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

import { useState } from "react";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const { check, message } = props.inputValidation(enteredValue);
  

  const showError = !check && isClicked;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    props.formValidation()
  };

  const onBlurHandler = (event) => {
    setIsClicked(true);
    props.getValue(event.target);
  };

  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        value={props.value}
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

import { useState } from "react";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState(props.initialValue);
  const [isClicked, setIsClicked] = useState(false);

  const { check, message } = props.inputValidation(enteredValue);

  const showError = !check && isClicked;

  const onChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    props.getValue(event.target.value, props.name);
  };

  const onBlurHandler = () => {
    setIsClicked(true);
    props.formValidation();
  };

  return (
    <div className="input">
      <span
        className={`input__name txt txt--description txt--description--small ${
          enteredValue ? "input__name--up" : ""
        }`}
      >
        {props.name}
      </span>

      <input
        value={enteredValue}
        id={props.name}
        type={props.type}
        required
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className="input__field txt txt--description txt--description--normal"
      />

      {showError && (
        <span className="input__warning txt txt--description txt--description--warning">
          {message}
        </span>
      )}
    </div>
  );
};

export default Input;

const ButtonMain = (props) => {
  return (
    <button
      onClick={props.onClickHandler}
      className={`button button--main txt txt--description txt--description--normal ${props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonMain;

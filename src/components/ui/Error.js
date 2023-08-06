import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Error = () => {
  const error = useSelector((state) => state.ui.error);
  const dispatch = useDispatch();

  const errorClickHandler = () => {
    dispatch(uiActions.setError(""));
  };

  return (
    error.trim().length > 0 && (
      <div className="error" onClick={errorClickHandler}>
        <span className="txt txt--description txt--description--normal">
          {error}
        </span>
      </div>
    )
  );
};

export default Error;

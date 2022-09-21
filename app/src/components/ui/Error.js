import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.ui.error);
  return (
    error.trim().length > 0 && (
      <div>
        <p>{error}</p>
      </div>
    )
  );
};

export default Error;

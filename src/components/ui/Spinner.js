import { useSelector } from "react-redux";

const Spinner = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  
  return isLoading && <div>Loading...</div>;
};

export default Spinner;
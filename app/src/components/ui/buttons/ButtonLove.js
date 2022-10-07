import useFetchUser from "../../../hooks/use-fetch-user";
import { useSelector } from "react-redux";
import { useState } from "react";

const ButtonImage = (props) => {
  const { loveProduct } = useFetchUser();
  const lovedProducts = useSelector(
    (state) => state.user.userData.lovedProducts
  );
  let isloved 
  if (lovedProducts && lovedProducts.includes(props.id)) {
    isloved = true
  } else {
    isloved = false
  }

  const [loved, setLoved] = useState(isloved);

  const onClickHandler = (event) => {
    event.preventDefault()
    loveProduct(props.id);
    setLoved(!loved);
  };

  return <button onClick={onClickHandler}>{loved ? "loved" : "love"}</button>;
};

export default ButtonImage;

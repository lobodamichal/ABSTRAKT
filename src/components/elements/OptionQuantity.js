import ButtonOption from "../ui/buttons/ButtonOption";
import { useState } from "react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const OptionQuantity = (props) => {
  const [quantity, setQuantity] = useState(props.initValue);
  const type = props.type;
  const dispatch = useDispatch();

  const onDecrease = () => {
    const newQuantity = quantity - 1
    if (quantity > 1) {
      setQuantity(newQuantity);

      switch (type) {
        case "cart":
          dispatch(cartActions.changeQuantity({index: props.index, increase: false}));
          break;
        case "product":
          props.changeQuantity(newQuantity);
          break;
      }
    }
  };

  const onIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity);

    switch (type) {
      case "cart":
        dispatch(cartActions.changeQuantity({index: props.index, increase: true}));
        break;
      case "product":
        props.changeQuantity(newQuantity);
        break;
    }
  };

  return (
    <>
      <ButtonOption onClickHandler={onDecrease}>-</ButtonOption>
      <p>{quantity}</p>
      <ButtonOption onClickHandler={onIncrease}>+</ButtonOption>
    </>
  );
};

export default OptionQuantity;

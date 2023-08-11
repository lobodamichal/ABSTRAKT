import ButtonOption from "../ui/buttons/ButtonOption";
import { useState } from "react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const OptionQuantity = (props) => {
  const [quantity, setQuantity] = useState(props.initValue);
  const type = props.type;
  const dispatch = useDispatch();

  const onDecrease = () => {
    const newQuantity = quantity - 1;
    if (quantity > 1) {
      setQuantity(newQuantity);

      switch (type) {
        case "cart":
          dispatch(
            cartActions.changeQuantity({ index: props.index, increase: false })
          );
          break;
        case "product":
          props.changeQuantity(newQuantity);
          break;
      }
    }
  };

  const onIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    switch (type) {
      case "cart":
        dispatch(
          cartActions.changeQuantity({ index: props.index, increase: true })
        );
        break;
      case "product":
        props.changeQuantity(newQuantity);
        break;
    }
  };

  return (
    <div className={`button--option--container ${props.classNameContainer}`}>
      <p className={`txt--description txt--description--small button--option__par ${props.classNameName}`}>
        quantity:
      </p>
      <div className={`button--option--quantity  ${props.classNameButton}`}>
        <ButtonOption
          styles="button--option--quantity__plus"
          onClickHandler={onDecrease}
        >
          -
        </ButtonOption>
        <div className="button--option button--option--quantity__amount txt txt--description txt--description--small">
          <p>{quantity}</p>
        </div>

        <ButtonOption
          styles="button--option--quantity__plus"
          onClickHandler={onIncrease}
        >
          +
        </ButtonOption>
      </div>
    </div>
  );
};

export default OptionQuantity;

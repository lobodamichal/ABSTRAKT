import ButtonOption from "../ui/buttons/ButtonOption";

const OptionQuantity = (props) => {
  const quantity = props.data;
  
  const onDecrease = () => {
    if (quantity > 1) {
      props.setQuantity(quantity - 1);
    }
  };

  const onIncrease = () => {
    props.setQuantity(quantity + 1);
  };

  return (
    <>
      <ButtonOption onClickHandler={onDecrease}>-</ButtonOption>
      <p>{props.data}</p>
      <ButtonOption onClickHandler={onIncrease}>+</ButtonOption>
    </>
  );
};

export default OptionQuantity;

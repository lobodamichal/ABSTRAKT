import nextValue from "../../helpers/nextValue";
import ButtonOption from "../ui/buttons/ButtonOption";

const OptionSize = (props) => {
  const sizes = Object.keys(props.data.variant);
  const initialState = props.initialSize;

  const sizeHandler = () => {
    props.setSize(nextValue(sizes, initialState));
  };

  return (
    <ButtonOption onClickHandler={sizeHandler}>
      {`${props.data.variant[initialState].dimensions[0]}" x ${props.data.variant[initialState].dimensions[1]}"`}
    </ButtonOption>
  );
};

export default OptionSize;

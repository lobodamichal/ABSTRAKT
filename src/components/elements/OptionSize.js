import arrayLooper from "../../helpers/arrayLooper";
import ButtonOption from "../ui/buttons/ButtonOption";

const OptionSize = (props) => {

  const nextVariant = () => {
    props.setValue(arrayLooper(props.data, props.value));
  };

  return (
    <ButtonOption onClickHandler={nextVariant}>
      {`${props.value.dimensions[0]}" x ${props.value.dimensions[1]}"`}
    </ButtonOption>
  );
};

export default OptionSize;

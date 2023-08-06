import arrayLooper from "../../helpers/arrayLooper";
import ButtonOption from "../ui/buttons/ButtonOption";

const OptionSize = (props) => {
  const nextVariant = () => {
    props.setValue(arrayLooper(props.data, props.value));
  };

  return (
    <div className="button--option--container">
      <p className="txt--description txt--description--small button--option__par">
        size:
      </p>
      <ButtonOption styles="button--option--size" onClickHandler={nextVariant}>
        {`${props.value.dimensions[0]}" x ${props.value.dimensions[1]}"`}
      </ButtonOption>
    </div>
  );
};

export default OptionSize;

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { allProductsActions } from "../../store/all-products-slice";
import ButtonOption from "../ui/buttons/ButtonOption";
import nextValue from "../../helpers/nextValue";

const OptionSort = () => {
  const dispatch = useDispatch();

  const optionValues = [
    "price",
    "popularity",
    "author",
    "name",
    "date released",
  ];
  const optionOrders = ["up", "down"];

  const [optionSettings, setOptionSettings] = useState({
    value: optionValues[1],
    order: optionOrders[1],
  });

  useEffect(() => {
    dispatch(
      allProductsActions.sortProducts({
        type: optionSettings.value,
        order: optionSettings.order,
      })
    );
  }, [optionSettings, dispatch]);

  const valueHandler = () => {
    const newValue = nextValue(optionValues, optionSettings.value);
    setOptionSettings({ ...optionSettings, value: newValue });
  };

  const orderHandler = () => {
    const newOrder = nextValue(optionOrders, optionSettings.order);
    setOptionSettings({ ...optionSettings, order: newOrder });
  };

  return (
    <>
      <ButtonOption onClickHandler={valueHandler}>
        {optionSettings.value}
      </ButtonOption>
      <ButtonOption onClickHandler={orderHandler}>
        {optionSettings.order}
      </ButtonOption>
    </>
  );
};

export default OptionSort;

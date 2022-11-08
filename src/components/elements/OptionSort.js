import { useState, useEffect } from "react";
import useProducts from "../../hooks/use-products";
import ButtonOption from "../ui/buttons/ButtonOption";
import arrayLooper from "../../helpers/arrayLooper";

const OptionSort = () => {
  const { sortProducts } = useProducts();

  const setupSort = {
    orders: ["up", "down"],
    values: ["popularity", "price", "author", "name", "date released"],
  };

  const [optionSettings, setOptionSettings] = useState({
    value: setupSort.values[0],
    order: setupSort.orders[1],
  });

  useEffect(() => {
    sortProducts(optionSettings.value, optionSettings.order);
  }, [optionSettings]);

  const valueHandler = () => {
    const newValue = arrayLooper(setupSort.values, optionSettings.value);
    setOptionSettings({ ...optionSettings, value: newValue });
  };

  const orderHandler = () => {
    const newOrder = arrayLooper(setupSort.orders, optionSettings.order);
    setOptionSettings({ ...optionSettings, order: newOrder });
  };

  return (
    <>
      <p>sort by:</p>
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

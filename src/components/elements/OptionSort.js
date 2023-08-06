import { useState, useEffect } from "react";
import useProducts from "../../hooks/use-products";
import ButtonOption from "../ui/buttons/ButtonOption";
import arrayLooper from "../../helpers/arrayLooper";

const OptionSort = (props) => {
  const { sortProducts } = useProducts();

  const setupSort = {
    orders: ["u", "d"],
    values: ["popularity", "price", "author", "name", "release"],
  };

  const [optionSettings, setOptionSettings] = useState({
    value: setupSort.values[0],
    order: setupSort.orders[1],
  });

  const arrowClass =
    "button--option--sort__arrow button--option--sort__arrow--" +
    optionSettings.order;

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
    <div className={props.className}>
      <p className="txt--description txt--description--small button--option__par--sort">
        sort by:
      </p>
      <div>
        <ButtonOption
          styles="button--option--sort__value"
          onClickHandler={valueHandler}
        >
          {optionSettings.value}
        </ButtonOption>
        <ButtonOption
          onClickHandler={orderHandler}
          styles="button--option--sort"
        >
          <div className={arrowClass}>{optionSettings.order}</div>
        </ButtonOption>
      </div>
    </div>
  );
};

export default OptionSort;

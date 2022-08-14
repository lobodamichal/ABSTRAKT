import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsActions } from "../../store/all-products-slice";
import ButtonOption from "../ui/buttons/ButtonOption";
import nextValue from "../../helpers/nextValue";

const OptionSort = () => {
  const dispatch = useDispatch();
  const {values, orders} = useSelector(
    (state) => state.allProducts.optionSortSetup
  );

  const [optionSettings, setOptionSettings] = useState({
    value: values[1],
    order: orders[1],
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
    const newValue = nextValue(values, optionSettings.value);
    setOptionSettings({ ...optionSettings, value: newValue });
  };

  const orderHandler = () => {
    const newOrder = nextValue(orders, optionSettings.order);
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

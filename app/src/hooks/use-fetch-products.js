import { allProductsActions } from "../store/all-products-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "../store/ui-slice";

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(uiActions.changeIsLoading(true))
    const response = await fetch(
        "https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
    const data = await response.json()
    dispatch(allProductsActions.insertProducts(data))
    dispatch(uiActions.changeIsLoading(false))
  }, [dispatch]);
};

export default useFetchProducts;
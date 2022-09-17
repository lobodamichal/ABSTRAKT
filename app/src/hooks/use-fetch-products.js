import { allProductsActions } from "../store/all-products-slice";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const useFetchProducts = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      dispatch(uiActions.setIsLoading(true));
      
      const response = await fetch(
        "https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      );

      const data = await response.json();
      dispatch(allProductsActions.insertProducts(data));

    } catch (e) {
      
      dispatch(uiActions.setError('Can\'t load...'));

    }

    dispatch(uiActions.setIsLoading(false));
  };

  return fetchProducts;
};

export default useFetchProducts;

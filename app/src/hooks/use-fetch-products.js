import { allProductsActions } from "../store/all-products-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Error from "../components/ui/Error";
import Spinner from "../components/ui/Spinner";

const useFetchProducts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const fetchProducts = async () => {
    try {
      setIsLoading(<Spinner />);
      const response = await fetch(
        "https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrog, please reload the page.");
      }

      const data = await response.json();

      dispatch(allProductsActions.insertProducts(data));
    } catch (error) {
      setError(<Error>{error.message}</Error>);
    }
    setIsLoading(null);
  };

  return {
    isLoading,
    error,
    fetchProducts,
  };
};

export default useFetchProducts;

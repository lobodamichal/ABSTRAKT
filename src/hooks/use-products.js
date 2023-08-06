import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { allProductsActions } from "../store/all-products-slice";

const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const firstVariant = (variants, key) => {
    return variants.reduce((prevObj, currObj) =>
      prevObj[key] > currObj[key] ? currObj : prevObj
    );
  };

  const findProduct = (key, value) => {
    return products.find((x) => x[key] === value);
  };

  const sorting = (key, order) => {
    let sorted = [...products];
    if (key.includes(".")) {
      const keys = key.split(".");
      if (order === "down") {
        return sorted.sort((a, b) =>
          a[keys[0]][keys[1]] < b[keys[0]][keys[1]] ? 1 : -1
        );
      } else {
        return sorted.sort((a, b) =>
          a[keys[0]][keys[1]] > b[keys[0]][keys[1]] ? 1 : -1
        );
      }
    } else {
      if (order === "down") {
        return sorted.sort((a, b) => (a[key] < b[key] ? 1 : -1));
      } else {
        return sorted.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      }
    }
  };

  const sortProducts = (type, order) => {
    let output;
    switch (type) {
      case "price":
        output = sorting("variant.price", order);
        break;
      case "popularity":
        output = sorting("sold", order);
        break;
      case "author":
        output = sorting("author", order);
        break;
      case "name":
        output = sorting("name", order);
        break;
      case "release":
        output = sorting("since", order);
        break;
    }
    dispatch(allProductsActions.insertProducts(output));
  };

  const fetchProducts = async () => {
    dispatch(uiActions.setIsLoading(true));

    await fetch(
      "https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    )
      .then((response) => {
        response.json().then((data) => {
          const products = data.map((el) => ({
            ...el,
            variant: firstVariant(el.variants, "price"),
          }));
          dispatch(allProductsActions.insertProducts(products));
        });
      })
      .catch((e) => {
        dispatch(uiActions.setError("Can't load..."));
      });
    dispatch(uiActions.setIsLoading(false));
  };

  return { sortProducts, fetchProducts, firstVariant, findProduct };
};

export default useProducts;

const sortProducts = (products, keyCallbackFunction, order) => {
  if (order === "down") {
    products.sort((a, b) =>
      a[keyCallbackFunction(a)] < b[keyCallbackFunction(b)] ? 1 : -1
    );
  } else {
    products.sort((a, b) =>
    a[keyCallbackFunction(a)] > b[keyCallbackFunction(b)] ? 1 : -1
    );
  }
};

export default sortProducts;

const sortProducts = (products, key, order) => {
  products.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  if (order === "down") products.reverse();
};

export default sortProducts;

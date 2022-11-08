import ProductContainer from "../containers/ProductContainer";

import useProducts from "../../hooks/use-products";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  const { findProduct } = useProducts();

  const product = findProduct("id", params.id);
  if (!product) {
    return <></>;
  }
  return (
    <>
      <ProductContainer data={product} />
    </>
  );
};

export default ProductPage;

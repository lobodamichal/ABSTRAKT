import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import findProduct from "../../helpers/findProduct";
import ButtonImage from "../ui/buttons/ButtonImage";
import ButtonMain from "../ui/buttons/ButtonMain";
import OptionQuantity from "../elements/OptionQuantity";
import OptionSize from "../elements/OptionSize";

const ProductContainer = () => {
  const params = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const product = findProduct(products, params.id);

  const [size, setSize] = useState(Object.keys(product.variant)[0])
  const [quantity, setQuantity] = useState(1)

  

  return (
    <>
      <div>gallery</div>
      <h1>{product.name}</h1>
      <ButtonImage>like</ButtonImage>
      <p>by {product.author}</p>
      <p>{product.variant[size].price}</p>
      <OptionSize data={product} setSize={setSize} initialSize={size}/>
      <OptionQuantity data={quantity} setQuantity={setQuantity}/>
      <ButtonMain>add to cart</ButtonMain>
      <p>{product.description}</p>
    </>
  );
};

export default ProductContainer;

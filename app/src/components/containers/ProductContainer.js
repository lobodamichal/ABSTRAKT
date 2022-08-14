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
  const products = useSelector(state => state.allProducts.products)
  const product = findProduct(products, params.id)
  const sizes = Object.keys(product.variant)
  const initialState = {quantity: 1, size: sizes[0]}
  const [optionSettings, setOptionSettings ] = useState(initialState)
  

  return (
    <>
      <div>gallery</div>
      <h1>{product.name}</h1>
      <ButtonImage>like</ButtonImage>
      <p>by {product.author}</p>
      <p>{product.variant[optionSettings.size].price}</p>
      <OptionSize data={sizes}/>
      <OptionQuantity />
      <ButtonMain>add to cart</ButtonMain>
      <p>{product.description}</p>
    </>
  );
};

export default ProductContainer;

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { cartActions } from "../../store/cart-slice";
import { allProductsActions } from "../../store/all-products-slice";
import findProduct from "../../helpers/findProduct";
import firstVariant from "../../helpers/firstVariant";
import ButtonLike from "../ui/buttons/ButtonLike";
import ButtonMain from "../ui/buttons/ButtonMain";
import OptionQuantity from "../elements/OptionQuantity";
import OptionSize from "../elements/OptionSize";
import Image from "../ui/Image";

const ProductContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.allProducts.products);
  const pageProduct = findProduct(products, "id", params.id);
  const variants = pageProduct.variants;

  const [variant, setVariant] = useState(firstVariant(variants, "price"));
  const [quantity, setQuantity] = useState(1);

  const likeProductAction = (event) => {
    event.preventDefault();
    dispatch(allProductsActions.likeProduct(pageProduct.id));
  };

  const getQuantity = (val) => {
    setQuantity(val);
  };

  const addToCartAction = () => {
    const addProduct = {
      name: pageProduct.name,
      id: pageProduct.id,
      variant,
      quantity,
    };
    dispatch(cartActions.addToCart(addProduct));
  };

  return (
    <>
      <Image id={pageProduct.id} type='main' />
      <h1>{pageProduct.name}</h1>
      <ButtonLike onClickHandler={likeProductAction}>like</ButtonLike>
      <p>by {pageProduct.author}</p>
      <p>{variant.price}</p>
      <OptionSize data={variants} value={variant} setValue={setVariant} />
      <OptionQuantity
        changeQuantity={getQuantity}
        initValue={1}
        type={"product"}
      />
      <ButtonMain onClickHandler={addToCartAction}>add to cart</ButtonMain>
      <p>{pageProduct.description}</p>
    </>
  );
};

export default ProductContainer;

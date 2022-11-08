import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { cartActions } from "../../store/cart-slice";
import ButtonLove from "../ui/buttons/ButtonLove";
import ButtonMain from "../ui/buttons/ButtonMain";
import OptionQuantity from "../elements/OptionQuantity";
import OptionSize from "../elements/OptionSize";
import Image from "../ui/Image";
import useProducts from "../../hooks/use-products";
import { uiActions } from "../../store/ui-slice";

const ProductContainer = (props) => {
  const { firstVariant } = useProducts();

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.ui.isLogged);
  const isLoading = useSelector((state) => state.ui.isLoading);

  const pageProduct = props.data;
  const variants = pageProduct.variants;

  const [variant, setVariant] = useState(firstVariant(variants, "price"));
  const [quantity, setQuantity] = useState(1);

  const getQuantity = (val) => {
    setQuantity(val);
  };

  const addToCartAction = () => {
    if (isLogged) {
      const addProduct = {
        name: pageProduct.name,
        id: pageProduct.id,
        variant,
        quantity,
      };
      dispatch(cartActions.addToCart(addProduct));
    } else dispatch(uiActions.setShowModal());
  };

  return (
    !isLoading && (
      <section>
        <Image id={pageProduct.id} type="main" />
        <h1>{pageProduct.name}</h1>
        <ButtonLove id={pageProduct.id}>like</ButtonLove>
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
      </section>
    )
  );
};

export default ProductContainer;

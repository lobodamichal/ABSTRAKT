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
      <section className="section layout--product">
        <Image
          id={pageProduct.id}
          type="main"
          className="layout--product__image"
        />

        <div className="layout--product__info">
          <div className="section__header">
            <h1 className="txt txt--header txt--header--huge">
              {pageProduct.name}
            </h1>
            <ButtonLove
              className="button--icon--love--grey"
              id={pageProduct.id}
            >
              like
            </ButtonLove>
          </div>

          <div className="layout--product__info__details">
            <p className="txt txt--description txt--description--normal">
              by {pageProduct.author}
            </p>
            <p className="txt txt--description txt--description--normal txt--price">
              ${variant.price}
            </p>
          </div>

          <div className="layout--product__info__options">
            <OptionSize data={variants} value={variant} setValue={setVariant} />
            <OptionQuantity
              changeQuantity={getQuantity}
              initValue={1}
              type={"product"}
            />
            <ButtonMain onClickHandler={addToCartAction}>
              add to shopping bag
            </ButtonMain>
          </div>

          <p className="txt txt--description txt--description--normal layout--product__info__description">
            {pageProduct.description}
          </p>
        </div>
      </section>
    )
  );
};

export default ProductContainer;
